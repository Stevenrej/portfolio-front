import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  plugins: [
    tailwindcss(join(__dirname, 'tailwind.config.cjs')),
    autoprefixer,
  ],
};
