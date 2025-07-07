/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ToneForge color scheme
        'lava-blue': '#3B82F6',
        'lava-purple': '#8B5CF6',
        'lava-green': '#10B981',
        'lava-cyan': '#06B6D4',
        'lava-indigo': '#4F46E5',
        // Effect categories
        'distortion': '#DC2626',
        'modulation': '#2563EB',
        'time': '#059669',
        'filter': '#CA8A04',
        'dynamics': '#7C3AED',
      },
      animation: {
        'pedal-glow': 'pedal-glow 2s ease-in-out infinite alternate',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        'pedal-glow': {
          '0%': { boxShadow: '0 0 5px #3B82F6' },
          '100%': { boxShadow: '0 0 20px #8B5CF6, 0 0 30px #06B6D4' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
        'gradient-effects': 'linear-gradient(135deg, #06B6D4, #10B981)',
        'gradient-distortion': 'linear-gradient(135deg, #DC2626, #F97316)',
        'gradient-modulation': 'linear-gradient(135deg, #2563EB, #3B82F6)',
        'gradient-time': 'linear-gradient(135deg, #059669, #10B981)',
        'gradient-filter': 'linear-gradient(135deg, #CA8A04, #EAB308)',
        'gradient-dynamics': 'linear-gradient(135deg, #7C3AED, #8B5CF6)',
      },
    },
  },
  plugins: [],
} 