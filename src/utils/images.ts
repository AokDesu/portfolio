import type { ImageMetadata } from 'astro';

const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/content/projects/**/*.{png,jpg,jpeg,webp}',
  { eager: true }
);

export function getProjectImage(srcPath: string): ImageMetadata | undefined {
  return imageModules[srcPath]?.default;
}

/** Candidate widths for srcset, never upscaling past the source capture. */
export function widthsFor(meta: ImageMetadata, candidates: number[]): number[] {
  const below = candidates.filter((w) => w < meta.width);
  return [...below, Math.min(meta.width, Math.max(...candidates))];
}

/** Phone-screen captures (tall, narrow) are laid out side by side on a shelf. */
export function isPhone(meta: ImageMetadata): boolean {
  return meta.height / meta.width > 1.6;
}
