import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
  //   proxy: {
  //      '/api': {
  //   //     target: 'http://localhost:5000',
  //   //   // target: 'https://swiptory-i2xk.onrender.com',
  //        target:'https://quizee-backen-3.onrender.com/',
  //       secure: false,
  //      },
  //    },
  },
  plugins: [react()],
})
