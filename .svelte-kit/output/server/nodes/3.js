

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/chisono/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.EVX7Bs_0.js","_app/immutable/chunks/C8SUvTu-.js","_app/immutable/chunks/Cfug8aQt.js","_app/immutable/chunks/BNLc8PSv.js"];
export const stylesheets = ["_app/immutable/assets/3.DijC3yu1.css"];
export const fonts = [];
