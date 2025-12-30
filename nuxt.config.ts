import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
      app: {
        head: {
            title: 'Company – Digital Solutions',
            meta: [
                { name: 'description', content: 'Enterprise-grade web solutions' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ]
        }
    },
    css: ['~/assets/css/tailwind.css'],
    typescript: {
        strict: true,
        shim: false
    },

    vite: {
        css: {
            postcss: {
                plugins: [
                    tailwindcss(),
                    autoprefixer()
                ]
            }
        }
    }
})
