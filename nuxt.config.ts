// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig(
  {
    css: [
      "/assets/styles/fonts.css", 
      "/assets/styles/global-styles.css"
    ],
    nitro: {
      preset: 'aws-lambda'
    }
  }
);
