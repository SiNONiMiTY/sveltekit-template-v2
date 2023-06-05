import defaultTheme from 'tailwindcss/defaultTheme'

/**
 * Flowbite Configuration
 * https://flowbite-svelte.com/docs/pages/introduction#Configuration
 */

/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        './src/**/*.{html,js,svelte,ts}',
        './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
    ],
    theme: {
        extend: {
            colors: {
                // flowbite-svelte
                primary: { 50: '#ebf5ff', 100: '#fff1ee', 200: '#ffe4de', 300: '#ffd5cc', 400: '#ffbcad', 500: '#fe795d', 600: '#ef562f', 700: '#eb4f27', 800: '#d3330a', 900: '#d3330a' },
            },
        },
        fontFamily: {
            sans: ['Inter', ...defaultTheme.fontFamily.sans],
        },
    },
    plugins: [
        import( 'flowbite/plugin' ),
    ],
    darkMode: 'class',
}

export default config
