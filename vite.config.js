import {defineConfig} from 'vite'

export default defineConfig({
    base: '/login-practica/',
    optimizeDeps: {
        exclude: ['bcrypt', 'cryptr']
      },
   
})