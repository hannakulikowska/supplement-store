import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  let base = '/';

  if (mode === 'production') {
    // For GitHub Pages
    base = '/supplement-store/';
  } else if (mode === 'wordpress') {
    // For WordPress
    base = '/wp-content/themes/supplement-store/';
  }

  return {
    base,
  };
});
