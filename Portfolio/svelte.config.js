import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      // Se pubblichi in una sottocartella, ad esempio /Portfolio, aggiungi:
      // pages: 'build',
      // assets: 'build',
      // fallback: null
    }),
    paths: {
      base: '/Portfolio' // metti il nome repo se pubblichi in repo GitHub Pages non root
    }
  }
};
