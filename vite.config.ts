import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    base: "/",
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    preview: {
        port: 8080,
        strictPort: true,
    },
    server: {
        port: 8080,
        strictPort: true,
        host: true,
        origin: "http://0.0.0.0:8080",
        hmr: {
            overlay: true,
            clientPort: 8080,
        },
        watch: {
            usePolling: true,
        },
    },
});
