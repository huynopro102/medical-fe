import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  console.log("Current mode:", mode); // Sẽ in ra "development" khi chạy npm run dev
  // Khi npm run build, Vite sẽ tự động chuyển sang chế độ production để tạo ra các file tĩnh (HTML, CSS, JS) trong thư mục dist.
  // Thiết lập baseURL dựa trên môi trường
  const baseURL =
    mode === "development"
      ? "http://localhost:3000"
      : "https://huynguyen-nginx.io.vn:8888/api";

  return {
    plugins: [react()],
    resolve: {
      alias: {
        src: "/src",
      },
    },
    server: {
      port: 5175,
      host: true,
      strictPort: true,
    },
    define: {
      __API_BASE_URL__: JSON.stringify(baseURL),
    },
  };
});
