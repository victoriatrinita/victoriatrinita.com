export const prerender = 'auto';

import { dev, browser } from '$app/environment';
import { inject } from '@vercel/analytics';

if (browser) {
	inject({ mode: dev ? 'development' : 'production' });
}
