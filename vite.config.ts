import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    build: {
        outDir: 'assets/bundle',
        lib: {
            entry: path.resolve(__dirname, 'src/main.ts'),
            name: 'Pegboard3D',
            fileName: (format) => `pegboard-3d.${format}.js`
        },
        rollupOptions: {
            // Ensure specific external libraries if needed, though usually for WP we might bundle Three.js
            // or exclude it if we enqueue it separately. For now, let's bundle it to valid "Requirements: 10.2"
            // which says "Enqueue Three.js...". If we bundle, we might double load if another plugin loads it.
            // But the requirement says "Enqueue Three.js, GLTFLoader, and the main configurator script".
            // So maybe we should treat Three.js as external?
            // Let's bundle it for simplicity of initial setup, and we can externalize later if needed.
        }
    }
});
