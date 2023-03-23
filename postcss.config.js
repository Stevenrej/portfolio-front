import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  plugins: [
    postcssImport(),
    tailwindcss(join(__dirname, 'tailwind.config.cjs')),
    autoprefixer(),
  ],
};
