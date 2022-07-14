
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/portfolio-ibra/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
        projects: resolve(__dirname, 'pages/projects.html'),
        "32-bits": resolve(__dirname, 'pages/project/32-bits.html'),
        "neighborfood": resolve(__dirname, 'pages/project/neighborfood.html'),
        "watch-list": resolve(__dirname, 'pages/project/watch-list.html'),
        "poke-810": resolve(__dirname, 'pages/project/poke-810.html'),
      }

    }
  }
})
