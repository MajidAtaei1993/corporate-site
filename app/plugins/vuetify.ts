import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { defineNuxtPlugin } from 'nuxt/app'

export const noxaiThemes = {
  dark: {
    dark: true,
    colors: {
      background: '#0A0A0A',
      surface: '#111111',
      primary: '#FFFFFF',
      secondary: '#B4B4B4',
      error: '#FFFFFF',
      info: '#B4B4B4',
      success: '#FFFFFF',
      warning: '#B4B4B4',
      // Custom semantic tokens
      border: '#1E1E1E',
      muted: '#6F6F6F',
      glow: '#FFFFFF'
    }
  },
  light: {
    dark: false,
    colors: {
      background: '#FFFFFF',
      surface: '#F5F5F5',
      primary: '#1A1A1A',
      secondary: '#4D4D4D',
      error: '#D32F2F',
      info: '#1976D2',
      success: '#388E3C',
      warning: '#FBC02D',
      // Custom semantic tokens
      border: '#E0E0E0',
      muted: '#757575',
      glow: '#BBBBBB'
    }
  }
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    blueprint: md3,
    theme: {
      defaultTheme: 'dark', // میتونی 'light' هم بذاری
      themes: {
        dark: noxaiThemes.dark,
        light: noxaiThemes.light
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
