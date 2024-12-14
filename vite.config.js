import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pluginPurgeCss from "@mojojoejo/vite-plugin-purgecss";



// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), pluginPurgeCss()],
  build: {
    outDir: "build",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Determine the folder based on the file type
          if (/\.(css)$/.test(assetInfo.name)) {
            return 'assets/css/[name].[hash][extname]';
          }
          if (/\.(woff|woff2|eot|ttf|otf)$/.test(assetInfo.name)) {
            return 'assets/fonts/[name].[hash][extname]';
          }
          if (/\.(png|jpe?g|gif|svg|webp|avif)$/.test(assetInfo.name)) {
            return 'assets/images/[name].[hash][extname]';
          }
          return '[name].[hash][extname]'; // Default for other assets
        }
      }
    }
  }
})
