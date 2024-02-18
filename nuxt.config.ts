// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/color-mode"],
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "dark", // fallback value if not system preference found
    classSuffix: "", // compatibility with TailwindCSS
  },
});
