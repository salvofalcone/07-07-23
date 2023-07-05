import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "./src/scss/helpers/functions.scss";
        @import "./src/scss/variables/colors.scss";
        @import "./src/scss/variables/layout.scss";
        @import "./src/scss/helpers/devices.scss";
        @import "./src/scss/helpers/mixins.scss";
        @import "./src/scss/fonts/all.scss";
        @import "./src/scss/layouts/all.scss";
        @import "./src/scss/variables/typography.scss";
        @import "./src/scss/helpers/animations.scss";
        @import "./src/scss/helpers/elevations.scss";
        @import "./src/scss/helpers/extends.scss";
        `,
      },
    },
  },
});
