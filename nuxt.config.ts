// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@vant/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore',
          ['defineStore', 'definePiniaStore']
        ]
      }
    ]
  ],
  vant: {
    /** Options */
  },
  pinia: {
    storesDirs: ['./stores/**']
  },
  components: [
    {
      path: '/components',
      pathPrefix: false,
    },
  ],
})
