import type { MetadataRoute } from 'next';

/**
 * Next.js web application manifest generator.
 * Provides progressive web application metadata for browsers.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Next.js Starter',
    short_name: 'NextStarter',
    description: 'A modern, performant Next.js starter application',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
