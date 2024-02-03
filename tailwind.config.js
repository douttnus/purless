/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    fontFamily: {
      'heebo': ['Heebo', 'system-ui'],
      'workbench': ['Workbench', 'system-ui']
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

