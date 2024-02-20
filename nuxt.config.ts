// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
    
  },
  pages: true,
  modules: ['@nuxtjs/supabase'],
  supabase: {
      redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/', '/league/*', '/team/*'],
      cookieRedirect: false,
    }
  },
css: [
  "~/node_modules/bootstrap/dist/css/bootstrap.min.css"
]

})