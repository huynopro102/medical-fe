import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    }
  }, 
  server: {
    port: 5175, // Port bạn muốn sử dụng
    host: true, // Needed for docker
    strictPort: true, // Nếu port đã được sử dụng, Vite sẽ dừng thay vì thử port khác
    // Các cấu hình server khác nếu cần
    // watch: {
    //   usePolling: true
    // }
  }
});
