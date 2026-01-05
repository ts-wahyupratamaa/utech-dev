import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#ff6600',
        'custom-dark-bg': '#0e1325',
        'custom-card-bg': '#161d36',
        'custom-section-bg': '#0c1328',
      },
    },
  },
  plugins: [],
};
export default config;
