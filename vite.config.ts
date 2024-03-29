// @ts-ignore
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from 'unocss/vite'
import transformerDirectives from '@unocss/transformer-directives'

import { presetUno } from 'unocss'
import presetIcons from '@unocss/preset-icons'

import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
    UnoCSS({
      presets: [
        presetIcons(),
        presetUno(),
      ],
      transformers: [
        transformerDirectives(),
      ],
    }),

  ],


  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  // prevent vite from obscuring rust errors
  clearScreen: false,
  // tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
  },
  // to make use of `TAURI_DEBUG` and other env variables
  // https://tauri.studio/v1/api/config#buildconfig.beforedevcommand
  envPrefix: ["VITE_", "TAURI_"],
  build: {
    // Tauri supports es2021
    // target: process.env.TAURI_PLATFORM == "windows" ? "chrome105" : "safari13",
    target: "esnext",
    // don't minify for debug builds
    minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG,
  },
  resolve: {
    alias: {
      "@": "/src",
    }
  }
});
