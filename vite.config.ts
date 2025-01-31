import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/common"),
      "@atoms": path.resolve(__dirname, "src/components/atoms"),
      "@layouts": path.resolve(__dirname, "src/components/layouts"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@config": path.resolve(__dirname, "src/config"),
      "@styles": path.resolve(__dirname, "src/assets/css"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@redux": path.resolve(__dirname, "src/redux"),
      "@reduxActions": path.resolve(__dirname, "src/redux/actions"),
      "@reduxSlices": path.resolve(__dirname, "src/redux/slices"),
      "@enums": path.resolve(__dirname, "src/typings/enums"),
      "@interfaces": path.resolve(__dirname, "src/typings/interfaces"),
      "@responses": path.resolve(__dirname, "src/typings/interfaces/responses"),
      "@requests": path.resolve(__dirname, "src/typings/interfaces/requests"),
      "@providers": path.resolve(__dirname, "src/providers"),
      "@data": path.resolve(__dirname, "src/data"),
      "@services": path.resolve(__dirname, "src/services"),
    },
  },
});
