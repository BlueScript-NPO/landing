// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["@nuxt/ui-pro"],
  modules: ["@nuxt/content", "@nuxt/eslint", "@nuxt/ui"],
  ui: {
    icons: ["heroicons", "simple-icons"],
  },
});
