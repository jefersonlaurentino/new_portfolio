import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: '#0B071E',
  			foreground: 'var(--foreground)',
  			primaria: '#5118C7'
  		},
  		backgroundImage: {
  			gradientPrimaria: 'linear-gradient(to top, #5118C7, #5118C7)'
  		},
  		boxShadow: {
  			parallax: 'inset 0px 0px 20px 11px #00000087'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  darkMode: ['selector', '[data-mode="dark"]'],
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
