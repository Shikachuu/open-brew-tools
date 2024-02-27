/// <reference types="vitest" />
import path from "node:path"
import react from "@vitejs/plugin-react-swc"
import generouted from "@generouted/react-router/plugin"
import { defineConfig } from "vite"

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  plugins: [react(), generouted()],
  resolve: {
    alias: {
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  test: {
    include: ["tests/**/*.{test,spec}.{js,ts}"],
  },
})
