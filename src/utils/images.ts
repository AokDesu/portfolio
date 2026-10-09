import type { ImageMetadata } from 'astro';

const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/content/projects/**/*.{png,jpg,jpeg,webp}',
  { eager: true }
);

export function getProjectImage(srcPath: string): ImageMetadata | undefined {
  return imageModules[srcPath]?.default;
}
