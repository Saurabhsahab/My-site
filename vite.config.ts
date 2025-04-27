
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // Configure base URL for GitHub Pages deployment
  base: "/My-site/",
  
  // Development server configuration
  server: {
    host: "::",
    port: 8080,
  },
  
  // Plugin configuration
  plugins: [
    react(),
    // Only include componentTagger in development mode
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  
  // Path aliases for cleaner imports
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  // Build configuration
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false, // Disable sourcemaps in production for better performance
  },
}));
