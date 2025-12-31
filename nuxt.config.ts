import { defineNuxtConfig } from "nuxt/config";

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
    css: [
        'vuetify/styles',
        '@/assets/css/noxai.css'
    ],
    build: {
        transpile: ['vuetify']
    },
    typescript: {
        strict: true,
        shim: false
    },
})
