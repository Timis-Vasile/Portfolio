import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: null
    }),
    paths: {
      base: '', // oppure '/NOME-REPO' se usi custom domain o github.io
    }
  }
};
