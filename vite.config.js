import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ramdom-compliments/' // Substitua NOME_DO_REPOSITORIO pelo nome do seu repositório no GitHub.
});
