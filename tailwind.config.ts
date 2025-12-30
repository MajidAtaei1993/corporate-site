import type { Config } from 'tailwindcss'

export default {
    content: [
        './components/**/*.{vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './app.vue'
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    500: '#22c55e',
                    700: '#1d4ed8'
                },
                surface: '#ffffff',
                muted: '#64748b'
            },
    
            fontSize: {
                xs: ['0.75rem', '1rem'],
                sm: ['0.875rem', '1.25rem'],
                base: ['1rem', '1.5rem'],
                lg: ['1.125rem', '1.75rem'],
                xl: ['1.25rem', '1.75rem'],
                '2xl': ['1.5rem', '2rem'],
                '4xl': ['2.25rem', '2.5rem']
            }
        }
    }

} satisfies Config

