import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/womensDay/", // Đổi theo tên repo của bạn

  plugins: [react()],
});
