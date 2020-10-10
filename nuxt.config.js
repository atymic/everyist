export default {
  target: 'static',
  buildModules: [
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/axios",
    "nuxt-auth-patched",
    ['@nuxtjs/google-analytics', {
      id: 'UA-147215234-3'
    }]
  ],
  tailwindcss: {
    exposeConfig: true
  },
  purgeCSS: {
    whitelist: ["dark-mode"]
  },
  googleFonts: {
    families: {
      Inter: true
    }
  },
  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
  },
  auth: {
    strategies: {
      todoist: {
        _scheme: 'oauth2',
        authorization_endpoint: 'https://todoist.com/oauth/authorize',
        access_token_endpoint: 'https://todoist.com/oauth/access_token',
        userinfo_endpoint: 'https://api.todoist.com/sync/v8/sync?sync_token=%2A&resource_types=%5B%22user%22%2C%20%22labels%22%2C%20%22projects%22%5D',
        scope: ['data:read_write'],
        access_type: undefined,
        response_type: 'code',
        token_type: 'Bearer',
        redirect_uri: undefined,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        token_key: 'access_token',
        state: 'XXXXXXXXZZZZZZZZZYYYYYY',
      }
    },
    defaultStrategy: 'todoist',
    redirect: {
      login: '/',
      logout: '/',
      home: '/',
      callback: '/login/'
    },
  }
};
