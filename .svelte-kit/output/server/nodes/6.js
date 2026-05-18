

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/progetti/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.DxNKEq3n.js","_app/immutable/chunks/C8SUvTu-.js","_app/immutable/chunks/Cfug8aQt.js","_app/immutable/chunks/BNLc8PSv.js"];
export const stylesheets = ["_app/immutable/assets/6.B96TXhCO.css"];
export const fonts = [];
