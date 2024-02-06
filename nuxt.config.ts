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
    redirect: false
  },
css: [
  "~/node_modules/bootstrap/dist/css/bootstrap.min.css"
]

})