import {
  AdditiveBlending,
  BoxGeometry,
  CanvasTexture,
  Color,
  CylinderGeometry,
  DirectionalLight,
  DoubleSide,
  ExtrudeGeometry,
  Fog,
  Group,
  HemisphereLight,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  Shape,
  ShapeGeometry,
  SRGBColorSpace,
  TextureLoader,
  Vector3,
  WebGLRenderer,
} from 'three';

// One continuous gallery: every station on the page sits somewhere along one camera path.
// The HTML stage is the layout authority. At rest the camera stands exactly DISTANCE in front
// of a station, so each mesh is placed where its HTML image placeholder is and the static and
// spatial views frame the same screen at the same size.
const STAGE = 0x101211;
const FOV = 36;
const DISTANCE = 9;
const SPACING = 17;
// Exhibits stand on the right of the camera axis. Each next station sits further left, so the
// camera always passes beside the exhibit it leaves rather than through it.
const DRIFT = 2.2;
const HOLD = 0.3; // fraction of a station's scroll spent resting before the flight starts
const ARRIVE = 0.15; // fraction spent resting after arriving
const TAIL = 0.35; // extra rest after the last station before the page continues
const PAIR_YAW = 0.15;
const SINGLE_YAW = -0.09;

const clamp01 = value => Math.min(1, Math.max(0, value));
const smoother = t => t * t * t * (t * (t * 6 - 15) + 10);
const smoothstep = (a, b, value) => { const t = clamp01((value - a) / (b - a)); return t * t * (3 - 2 * t); };

function roundedShape(width, height, radius) {
  const shape = new Shape();
  const x = -width / 2;
  const y = -height / 2;
  const r = Math.min(radius, width / 2, height / 2);
  shape.moveTo(x + r, y);
  shape.lineTo(x + width - r, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + r);
  shape.lineTo(x + width, y + height - r);
  shape.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  shape.lineTo(x + r, y + height);
  shape.quadraticCurveTo(x, y + height, x, y + height - r);
  shape.lineTo(x, y + r);
  shape.quadraticCurveTo(x, y, x + r, y);
  return shape;
}

function poolTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 256;
  const context = canvas.getContext('2d');
  const gradient = context.createRadialGradient(128, 128, 0, 128, 128, 128);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.35, 'rgba(255,255,255,.55)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  context.fillStyle = gradient;
  context.fillRect(0, 0, 256, 256);
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  return texture;
}

const beamShader = {
  uniforms: { intensity: { value: 0.085 }, tint: { value: new Color(0xf4ead8) } },
  vertexShader: `
    varying vec2 vUv; varying vec3 vNormal; varying vec3 vView;
    void main() {
      vUv = uv;
      vec4 view = modelViewMatrix * vec4(position, 1.0);
      vView = -view.xyz;
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * view;
    }`,
  fragmentShader: `
    uniform float intensity; uniform vec3 tint;
    varying vec2 vUv; varying vec3 vNormal; varying vec3 vView;
    void main() {
      float facing = abs(dot(normalize(vNormal), normalize(vView)));
      float alpha = intensity * pow(facing, 2.2) * (0.25 + 0.75 * (1.0 - vUv.y)) * smoothstep(0.0, 0.08, vUv.y);
      gl_FragColor = vec4(tint * alpha, alpha);
    }`,
};

/**
 * @param {{ host: HTMLElement, track: HTMLElement, stage: HTMLElement, sections: HTMLElement[], onFailure: () => void }} options
 */
export async function mountGallery({ host, track, stage, sections, onFailure }) {
  const renderer = new WebGLRenderer({ antialias: true, powerPreference: 'high-performance', failIfMajorPerformanceCaveat: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
  renderer.setClearColor(STAGE);
  renderer.outputColorSpace = SRGBColorSpace;
  const scene = new Scene();
  scene.background = new Color(STAGE);
  scene.fog = new Fog(STAGE, DISTANCE + 2, DISTANCE + SPACING * 1.35);
  const camera = new PerspectiveCamera(FOV, innerWidth / innerHeight, 0.1, 200);

  scene.add(new HemisphereLight(0xdfe6e1, 0x0b0d0c, 0.8));
  const key = new DirectionalLight(0xf6ecdc, 2.4);
  key.position.set(-3, 10, 7);
  scene.add(key);
  const rim = new DirectionalLight(0xc9dcd5, 1.6);
  rim.position.set(5, 4, -12);
  scene.add(rim);

  const shared = [];
  const keep = value => { shared.push(value); return value; };
  const graphite = keep(new MeshStandardMaterial({ color: 0x272d2a, metalness: 0.35, roughness: 0.32 }));
  const plinthMaterial = keep(new MeshStandardMaterial({ color: 0x161917, roughness: 0.92 }));
  const floorMaterial = keep(new MeshStandardMaterial({ color: 0x0a0c0b, roughness: 0.95 }));
  const browserBar = keep(new MeshBasicMaterial({ color: 0xe9ecef }));
  const browserDot = keep(new MeshBasicMaterial({ color: 0x858b8e }));
  const pool = keep(poolTexture());
  const poolMaterial = keep(new MeshBasicMaterial({ map: pool, color: 0xf3e6d0, transparent: true, opacity: 0.2, blending: AdditiveBlending, depthWrite: false }));
  const beamMaterial = keep(new ShaderMaterial({ ...beamShader, uniforms: { intensity: { value: 0.085 }, tint: { value: new Color(0xf4ead8) } }, transparent: true, blending: AdditiveBlending, depthWrite: false, side: DoubleSide }));
  const floorGeometry = keep(new PlaneGeometry(80, (sections.length + 4) * SPACING));
  const floor = new Mesh(floorGeometry, floorMaterial);
  floor.rotation.x = -Math.PI / 2;
  scene.add(floor);

  const built = new Group();
  scene.add(built);
  const disposable = [];
  const own = value => { disposable.push(value); return value; };

  const textures = [];
  const stations = [];
  const loader = new TextureLoader();
  let dead = false;
  let raf = 0;
  let last = 0;
  let unit = 0;
  let trackTop = 0;
  let step = innerHeight;
  let u = 0;
  let camIndex = -1;
  let shownStation = -1;
  const pointer = { x: 0, y: 0, dx: 0, dy: 0 };
  const intro = new Vector3();
  let slowFrames = 0;
  let sampledFrames = 0;

  const restX = index => -DRIFT * index;
  const restPosition = index => new Vector3(restX(index), 0, -index * SPACING + DISTANCE);

  function clearBuilt() {
    built.clear();
    for (const item of disposable.splice(0)) item.dispose();
  }

  function makeArtifact(item, width, height, headerHeight) {
    const group = new Group();
    const { kind, texture } = item;
    const phone = kind === 'phone';
    const rimSize = phone ? width * 0.03 : kind === 'paper' ? width * 0.006 : width * 0.008;
    const radius = phone ? width * 0.085 : kind === 'paper' ? 0.0001 : Math.min(width, height) * 0.018;
    const depth = phone ? width * 0.05 : 0.05;
    const bodyHeight = height + headerHeight;
    const bevel = Math.min(rimSize * 0.5, 0.02);
    // Extruded bevels grow the shape outward and forward; shrink by the bevel so the outer edge
    // matches the CSS frame, and set the front face flush with z = 0 behind the screen.
    const frame = new Mesh(own(new ExtrudeGeometry(roundedShape(width + (rimSize - bevel) * 2, bodyHeight + (rimSize - bevel) * 2, radius + rimSize - bevel), {
      depth,
      bevelEnabled: true,
      bevelSize: bevel,
      bevelThickness: bevel,
      bevelSegments: 3,
      curveSegments: 16,
    })), graphite);
    frame.position.set(0, headerHeight / 2, -(depth + bevel) - 0.001);
    group.add(frame);
    const screenGeometry = own(new ShapeGeometry(roundedShape(width, height, radius), 16));
    const position = screenGeometry.getAttribute('position');
    const uv = screenGeometry.getAttribute('uv');
    for (let index = 0; index < position.count; index++) uv.setXY(index, position.getX(index) / width + 0.5, position.getY(index) / height + 0.5);
    const screen = new Mesh(screenGeometry, own(new MeshBasicMaterial({ map: texture, toneMapped: false })));
    screen.position.z = 0.004;
    group.add(screen);
    if (kind === 'browser' && headerHeight > 0) {
      const bar = new Mesh(own(new PlaneGeometry(width, headerHeight)), browserBar);
      bar.position.set(0, height / 2 + headerHeight / 2, 0.004);
      group.add(bar);
      const dotGeometry = own(new PlaneGeometry(headerHeight * 0.25, headerHeight * 0.25));
      for (let index = 0; index < 3; index++) {
        const dot = new Mesh(dotGeometry, browserDot);
        dot.position.set(-width / 2 + headerHeight * (0.6 + index * 0.42), height / 2 + headerHeight / 2, 0.006);
        group.add(dot);
      }
    }
    return group;
  }

  // Rebuilt on resize: the HTML stage changes and every mesh follows it.
  function build() {
    clearBuilt();
    const width = stage.clientWidth;
    const height = stage.clientHeight;
    step = height;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    track.style.height = `${(stations.length - 1 + TAIL) * step + height}px`;
    trackTop = track.getBoundingClientRect().top + scrollY;
    unit = 2 * Math.tan(MathUtils.degToRad(FOV / 2)) * DISTANCE / height;
    const floorY = -height / 2 * unit;
    floor.position.set(0, floorY, -(sections.length * SPACING) / 2 + DISTANCE);
    const stageRect = stage.getBoundingClientRect();
    for (const station of stations) station.section.style.transform = '';
    for (const station of stations) {
      const z = -station.index * SPACING;
      const rest = restPosition(station.index);
      const toWorldX = px => rest.x + (px - stageRect.left - width / 2) * unit;
      const toWorldY = px => (height / 2 - (px - stageRect.top)) * unit;
      if (!station.items.length) continue;
      let left = Infinity;
      let right = -Infinity;
      let bottom = Infinity;
      const pair = station.items.length === 2;
      station.items.forEach((item, order) => {
        const rect = item.image.getBoundingClientRect();
        const bar = item.image.closest('.browser-frame')?.querySelector('.browser-bar')?.getBoundingClientRect();
        const headerHeight = bar ? bar.height * unit : 0;
        const w = rect.width * unit;
        const h = rect.height * unit;
        const group = makeArtifact(item, w, h, headerHeight);
        group.position.set(toWorldX(rect.left + rect.width / 2), toWorldY(rect.top + rect.height / 2), z);
        group.rotation.y = pair ? (order === 0 ? PAIR_YAW : -PAIR_YAW) : SINGLE_YAW;
        built.add(group);
        left = Math.min(left, toWorldX(rect.left));
        right = Math.max(right, toWorldX(rect.right));
        bottom = Math.min(bottom, toWorldY(rect.bottom));
      });
      for (const caption of station.captions) {
        const rect = caption.getBoundingClientRect();
        left = Math.min(left, toWorldX(rect.left));
        right = Math.max(right, toWorldX(rect.right));
      }
      const pad = 0.35;
      const plinthWidth = right - left + pad * 2;
      const top = bottom - 0.06;
      const plinthHeight = Math.max(top - floorY, 0.2);
      const centerX = (left + right) / 2;
      const plinth = new Mesh(own(new BoxGeometry(plinthWidth, plinthHeight, 1.5)), plinthMaterial);
      plinth.position.set(centerX, floorY + plinthHeight / 2, z - 0.45);
      built.add(plinth);
      const accent = new Mesh(own(new BoxGeometry(plinthWidth, 0.012, 0.012)), own(new MeshBasicMaterial({ color: station.accent })));
      accent.position.set(centerX, top - 0.006, z + 0.3);
      built.add(accent);
      const lightPool = new Mesh(own(new PlaneGeometry(plinthWidth * 2.2, 7)), poolMaterial);
      lightPool.rotation.x = -Math.PI / 2;
      lightPool.position.set(centerX, floorY + 0.004, z + 0.6);
      built.add(lightPool);
      const beamTop = height / 2 * unit + 4;
      const beamHeight = beamTop - top;
      const beam = new Mesh(own(new CylinderGeometry(0.18, plinthWidth * 0.62, beamHeight, 48, 1, true)), beamMaterial);
      beam.position.set(centerX, top + beamHeight / 2, z - 0.1);
      built.add(beam);
    }
    camIndex = -1;
  }

  function scrollU() {
    return MathUtils.clamp((scrollY - trackTop) / step, 0, stations.length - 1 + TAIL);
  }

  function cameraIndex(value) {
    const lastIndex = stations.length - 1;
    if (value <= 0) return 0;
    if (value >= lastIndex) return lastIndex;
    const index = Math.floor(value);
    return index + smoother(clamp01((value - index - HOLD) / (1 - HOLD - ARRIVE)));
  }

  const position = new Vector3();
  const look = new Vector3();
  function pose(c) {
    const index = Math.min(Math.floor(c), stations.length - 1);
    const next = Math.min(index + 1, stations.length - 1);
    const t = c - index;
    const from = restPosition(index);
    const to = restPosition(next);
    position.lerpVectors(from, to, t);
    position.y += Math.sin(Math.PI * t) * 0.8;
    const turn = smoother(clamp01(t * 1.35));
    look.lerpVectors(from, to, turn);
    look.z -= DISTANCE;
  }

  function updateLabels(c) {
    for (const station of stations) {
      const offset = station.index - c;
      const distance = Math.abs(offset);
      // Labels lead the arrival slightly; captions sit on the plinth, so they appear only once
      // the exhibit has settled where they belong.
      const visible = 1 - smoothstep(0.04, 0.3, distance);
      const style = station.section.style;
      style.opacity = visible.toFixed(3);
      style.transform = distance < 0.0005 ? '' : `translate3d(0, ${(offset * 48).toFixed(2)}px, 0)`;
      style.pointerEvents = visible > 0.5 ? 'auto' : 'none';
      const captionOpacity = (1 - smoothstep(0.005, 0.08, distance)).toFixed(3);
      for (const caption of station.captions) caption.style.opacity = captionOpacity;
      const current = Math.round(c) === station.index;
      if (current) station.section.dataset.current = '';
      else delete station.section.dataset.current;
    }
    const nearest = Math.round(c);
    if (nearest !== shownStation) {
      shownStation = nearest;
      track.dispatchEvent(new CustomEvent('gallery:station', { detail: { index: nearest } }));
    }
  }

  function draw(now) {
    raf = 0;
    if (dead || document.hidden) return;
    const elapsed = last ? Math.min((now - last) / 1000, 0.1) : 1 / 60;
    last = now;
    const target = scrollU();
    u += (target - u) * (1 - Math.exp(-7 * elapsed));
    if (Math.abs(target - u) < 0.0004) u = target;
    pointer.dx += (pointer.x - pointer.dx) * (1 - Math.exp(-4 * elapsed));
    pointer.dy += (pointer.y - pointer.dy) * (1 - Math.exp(-4 * elapsed));
    intro.multiplyScalar(Math.exp(-2.4 * elapsed));
    if (intro.lengthSq() < 1e-6) intro.set(0, 0, 0);
    const c = cameraIndex(u);
    pose(c);
    camera.position.set(position.x + pointer.dx + intro.x, position.y + pointer.dy + intro.y, position.z + intro.z);
    camera.lookAt(look);
    if (Math.abs(c - camIndex) > 0.00005) { updateLabels(c); camIndex = c; }
    const start = performance.now();
    renderer.render(scene, camera);
    // Count frames whose render work alone is too slow; a weak GPU falls back to the still view.
    if (sampledFrames++ > 30 && performance.now() - start > 32) slowFrames++;
    if (sampledFrames === 150 && slowFrames > 90) { onFailure(); return; }
    const moving = Math.abs(target - u) > 0 || Math.abs(pointer.x - pointer.dx) > 0.0005 || Math.abs(pointer.y - pointer.dy) > 0.0005 || intro.lengthSq() > 0;
    if (moving) wake();
  }

  function wake() { if (!raf && !dead && !document.hidden) raf = requestAnimationFrame(draw); }
  function onScroll() {
    document.documentElement.toggleAttribute('data-past-stage', scrollY > trackTop + track.offsetHeight - stage.clientHeight + 1);
    wake();
  }
  function onPointer(event) {
    pointer.x = (event.clientX / innerWidth - 0.5) * 0.5;
    pointer.y = -(event.clientY / innerHeight - 0.5) * 0.28;
    wake();
  }
  let resizeTimer = 0;
  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const keepIndex = Math.round(cameraIndex(u));
      build();
      scrollTo({ top: stationScroll(keepIndex), behavior: 'instant' });
      u = scrollU();
      last = 0;
      wake();
    }, 120);
  }
  function onVisibility() { if (document.hidden) { cancelAnimationFrame(raf); raf = 0; } else { last = 0; wake(); } }
  function onLost(event) { event.preventDefault(); onFailure(); }

  function stationScroll(index) {
    return trackTop + Math.max(0, index + (index === 0 ? 0 : 0.06)) * step;
  }

  function dispose() {
    if (dead) return;
    dead = true;
    cancelAnimationFrame(raf);
    clearTimeout(resizeTimer);
    removeEventListener('scroll', onScroll);
    removeEventListener('pointermove', onPointer);
    removeEventListener('resize', onResize);
    document.removeEventListener('visibilitychange', onVisibility);
    renderer.domElement.removeEventListener('webglcontextlost', onLost);
    clearBuilt();
    for (const item of shared) item.dispose();
    for (const item of textures) item.dispose();
    renderer.dispose();
    renderer.domElement.remove();
    track.style.height = '';
    document.documentElement.removeAttribute('data-past-stage');
    for (const station of stations) {
      const style = station.section.style;
      style.opacity = style.transform = style.pointerEvents = '';
      for (const caption of station.captions) caption.style.opacity = '';
      delete station.section.dataset.current;
      for (const item of station.items) item.image.closest('figure')?.removeAttribute('data-in-scene');
    }
  }

  try {
    await document.fonts.ready;
    const load = async image => {
      image.loading = 'eager';
      await image.decode().catch(() => {});
      const texture = await loader.loadAsync(image.currentSrc || image.src);
      texture.colorSpace = SRGBColorSpace;
      texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);
      textures.push(texture);
      return { image, texture, kind: image.closest('[data-kind]')?.dataset.kind ?? 'window' };
    };
    const loaded = await Promise.all(sections.map(section => Promise.all([...section.querySelectorAll('[data-scene] .artifact-image')].map(load))));
    if (dead) return null;
    for (const [index, section] of sections.entries()) {
      const accent = getComputedStyle(section).getPropertyValue('--category').trim() || '#b9d9cd';
      stations.push({ section, index, items: loaded[index], accent: new Color(accent), captions: [...section.querySelectorAll('[data-scene] figcaption, [data-scene] .exhibit-caption')] });
    }
    return {
      // The caller switches the HTML into its pinned stage, then hands control to the scene.
      start({ fromTop, index, fromBottom }) {
        for (const station of stations) for (const item of station.items) item.image.closest('figure')?.setAttribute('data-in-scene', '');
        build();
        if (index !== null) scrollTo({ top: stationScroll(index), behavior: 'instant' });
        else if (fromBottom !== null) scrollTo({ top: document.documentElement.scrollHeight - fromBottom, behavior: 'instant' });
        u = scrollU();
        if (fromTop) intro.set(0.4, 0.9, 6.5);
        host.append(renderer.domElement);
        renderer.domElement.addEventListener('webglcontextlost', onLost);
        addEventListener('scroll', onScroll, { passive: true });
        addEventListener('pointermove', onPointer, { passive: true });
        addEventListener('resize', onResize, { passive: true });
        document.addEventListener('visibilitychange', onVisibility);
        onScroll();
        draw(performance.now());
      },
      stationScroll,
      currentIndex: () => Math.round(cameraIndex(u)),
      dispose,
    };
  } catch (error) {
    dispose();
    throw error;
  }
}
