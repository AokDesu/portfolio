import { BufferAttribute, Vector3 } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Two CC0 models from Poly Pizza (credited in the site footer):
// "Smartphone" by smallbigsquare and "Monitor" by CreativeTrio. Only their geometry is used;
// the gallery supplies its own graphite material and puts each capture on the screen.

// Monitor screen, measured from monitor.glb after its node transform (scale 100): the recessed
// display face and the neck width. Everything else (bezel, neck, base) keeps its proportions.
const MONITOR = { screenX: 0.22002, screenBottom: 0.08285, screenTop: 0.2781, screenZ: 0.0035, neckX: 0.016393, width: 0.4696 };

function bakedGeometry(gltf) {
  let found = null;
  gltf.scene.updateMatrixWorld(true);
  gltf.scene.traverse(node => { if (!found && node.isMesh) found = node; });
  if (!found) throw new Error('model has no mesh');
  const geometry = found.geometry.clone();
  geometry.applyMatrix4(found.matrixWorld);
  for (const name of Object.keys(geometry.attributes)) if (name !== 'position' && name !== 'normal') geometry.deleteAttribute(name);
  return geometry;
}

function bounds(geometry) {
  geometry.computeBoundingBox();
  return geometry.boundingBox;
}

/** Phone lying on its back in the file: stand it up facing +z, display centred on the origin, display face at z = 0. */
function preparePhone(geometry) {
  geometry.rotateX(Math.PI / 2);
  const position = geometry.getAttribute('position');
  const front = bounds(geometry).max.z;
  const min = new Vector3(Infinity, Infinity, 0);
  const max = new Vector3(-Infinity, -Infinity, 0);
  for (let index = 0; index < position.count; index++) {
    if (position.getZ(index) < front - 1e-5) continue;
    min.x = Math.min(min.x, position.getX(index)); max.x = Math.max(max.x, position.getX(index));
    min.y = Math.min(min.y, position.getY(index)); max.y = Math.max(max.y, position.getY(index));
  }
  geometry.translate(-(min.x + max.x) / 2, -(min.y + max.y) / 2, -front);
  const box = bounds(geometry);
  return { geometry, screenWidth: max.x - min.x, screenHeight: max.y - min.y, bottom: box.min.y, halfWidth: Math.max(box.max.x, -box.min.x) };
}

function prepareMonitor(geometry) {
  const box = bounds(geometry);
  if (Math.abs(box.max.x - box.min.x - MONITOR.width) > 0.01) throw new Error('unexpected monitor model');
  return { geometry };
}

export async function loadModels(base) {
  const loader = new GLTFLoader();
  const [phone, monitor] = await Promise.all([loader.loadAsync(`${base}phone.glb`), loader.loadAsync(`${base}monitor.glb`)]);
  return { phone: preparePhone(bakedGeometry(phone)), monitor: prepareMonitor(bakedGeometry(monitor)) };
}

/** Uniform scale of the monitor's bezel, neck and base for a screen of width × height. */
export function monitorScale(width, height) {
  return Math.min(width / (MONITOR.screenX * 2), height / (MONITOR.screenTop - MONITOR.screenBottom));
}

/** Distance from the screen's bottom edge to the bottom of the monitor's base, for a given scale. */
export function monitorStand(scale) {
  return MONITOR.screenBottom * scale;
}

/**
 * The monitor resized around a width × height screen: the screen stretches to fit the capture,
 * while bezel, neck and base keep the model's proportions (a piecewise-linear "nine-slice" in x and y).
 * Screen centred on the origin, display face at z = 0.
 */
export function monitorGeometry(model, width, height) {
  const k = monitorScale(width, height);
  const geometry = model.geometry.clone();
  const position = geometry.getAttribute('position');
  const normal = geometry.getAttribute('normal');
  const { screenX, screenBottom, screenTop, screenZ, neckX } = MONITOR;
  const half = width / 2;
  const midSlope = (half - neckX * k) / (screenX - neckX);
  const ySlope = height / (screenTop - screenBottom);
  const mapped = new Float32Array(position.count * 3);
  const normals = new Float32Array(position.count * 3);
  for (let index = 0; index < position.count; index++) {
    const x = position.getX(index);
    const y = position.getY(index);
    const z = position.getZ(index);
    const ax = Math.abs(x);
    let nx; let sx;
    if (ax <= neckX) { nx = ax * k; sx = k; }
    else if (ax <= screenX) { nx = neckX * k + (ax - neckX) * midSlope; sx = midSlope; }
    else { nx = half + (ax - screenX) * k; sx = k; }
    let ny; let sy;
    if (y <= screenBottom) { ny = -height / 2 + (y - screenBottom) * k; sy = k; }
    else if (y <= screenTop) { ny = -height / 2 + (y - screenBottom) * ySlope; sy = ySlope; }
    else { ny = height / 2 + (y - screenTop) * k; sy = k; }
    mapped.set([Math.sign(x) * nx, ny, (z - screenZ) * k], index * 3);
    const n = new Vector3(normal.getX(index) / sx, normal.getY(index) / sy, normal.getZ(index) / k).normalize();
    normals.set([n.x, n.y, n.z], index * 3);
  }
  geometry.setAttribute('position', new BufferAttribute(mapped, 3));
  geometry.setAttribute('normal', new BufferAttribute(normals, 3));
  geometry.computeBoundingBox();
  return { geometry, bottom: geometry.boundingBox.min.y, left: geometry.boundingBox.min.x, right: geometry.boundingBox.max.x };
}
