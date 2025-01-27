import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0', // Bind to all IPs
    port: 5173, 
    allowedHosts : ["dd8c-169-150-218-34.ngrok-free.app"] 
         // Specify your desired port (default is 5173)
  },
})
