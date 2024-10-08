// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
    }
  },
  modules: [
    'nuxt-jwt-auth',
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
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nuxtJwtAuth: {
    baseUrl: 'http://127.0.0.1:8000/api', // URL of your backend
    endpoints: {
      login: '/auth/login', // Where to request login (POST)
      logout: '/auth/logout', // Where to request logout (POST)
      user: '/auth/user', // Where to request user data (GET)
      signup: '/auth/signup' // Where to request signup (POST)
    },
    redirects: {
      home: '/', // Where to redirect after successfull login and logout
      login: '/auth/login', // Where to redirect if user is not logged in and accesses a logged-only route
    }
  },
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
