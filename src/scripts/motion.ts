// Page motion for the Colour Chapters site. Everything here is an enhancement: with no
// script, or with reduced motion, every heading, text and picture is already visible.

declare global {
  interface Window { __motion?: boolean }
}
window.__motion = true;

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

// Entrances: each [data-rise] group's children rise in turn the first time it enters.
const groups = [...document.querySelectorAll<HTMLElement>('[data-rise]')];
for (const group of groups) {
  [...group.children].forEach((child, i) => {
    if (child instanceof HTMLElement) child.style.setProperty('--i', String(i));
  });
}
if (!('IntersectionObserver' in window) || reducedMotion.matches) {
  for (const group of groups) group.classList.add('in');
} else {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.01 });
  for (const group of groups) {
    // Anything already on screen at load starts its entrance at once.
    const box = group.getBoundingClientRect();
    if (box.top < innerHeight && box.bottom > 0) requestAnimationFrame(() => group.classList.add('in'));
    else observer.observe(group);
  }
}

// Sliding chapters: a chapter only stays pinned while the whole of it fits the window,
// so the next one can never cover text that has not been read.
const chapters = [...document.querySelectorAll<HTMLElement>('.chapter')];
const fitChapters = () => {
  for (const chapter of chapters) chapter.classList.toggle('loose', chapter.scrollHeight > innerHeight + 1);
};
fitChapters();
addEventListener('resize', fitChapters, { passive: true });
document.fonts?.ready.then(fitChapters);

// Projects menu: Escape and a click outside close it.
document.addEventListener('keydown', event => {
  const menu = document.querySelector<HTMLDetailsElement>('.projects-menu[open]');
  if (event.key === 'Escape' && menu) {
    menu.open = false;
    menu.querySelector('summary')?.focus();
  }
});
document.addEventListener('click', event => {
  const menu = document.querySelector<HTMLDetailsElement>('.projects-menu[open]');
  if (menu && event.target instanceof Node && !menu.contains(event.target)) menu.open = false;
});

// Page morph (cross-document view transitions): the colour field the visitor clicked
// becomes the next project's opening, and its title becomes the page title. Each name is
// given to one element per page; the page's static opening gives its names up first.
const projectSlug = (url: string) => new URL(url, location.href).pathname.match(/^\/projects\/([^/]+)\/?$/)?.[1] ?? null;

const nameField = (field: HTMLElement) => {
  for (const el of document.querySelectorAll<HTMLElement>('.vt-field, .vt-title')) el.style.viewTransitionName = 'none';
  field.style.viewTransitionName = 'field';
  const title = field.querySelector<HTMLElement>('[data-vt-title]');
  if (title) title.style.viewTransitionName = 'title';
};

let clickedField: HTMLElement | null = null;
document.addEventListener('click', event => {
  const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
  clickedField = link?.closest<HTMLElement>('[data-vt-field]') ?? null;
}, { capture: true });

const FROM_KEY = 'vt-from';
addEventListener('pageswap', event => {
  const activation = event.activation;
  if (!event.viewTransition || !activation) return;
  const target = projectSlug(activation.entry.url ?? '');
  if (clickedField && target && clickedField.dataset.vtField === target) nameField(clickedField);
  // Remember which project is being left, so going back can morph into its chapter
  // (read by the render-blocking script in SiteLayout's head on the next page).
  const leaving = projectSlug(location.href);
  if (leaving && activation.navigationType === 'traverse') sessionStorage.setItem(FROM_KEY, leaving);
  else sessionStorage.removeItem(FROM_KEY);
});
export {};
