/**
 * SvelteKit Prerender (Static Site Generation)
 * https://kit.svelte.dev/docs/adapter-static
 * https://kit.svelte.dev/docs/page-options#prerender
 *
 * This is needed so that SvelteKit will output static files.
 */

export const prerender = true

/**
 * SvelteKit Server Side Rendering
 * https://kit.svelte.dev/docs/page-options#ssr
 *
 * Makes our app act as an SPA, with immediate access to browser-only globals.
 */

export const ssr = false
