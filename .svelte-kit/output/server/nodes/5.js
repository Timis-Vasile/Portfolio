

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/materie/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.CXOYXqKd.js","_app/immutable/chunks/C8SUvTu-.js","_app/immutable/chunks/Cfug8aQt.js","_app/immutable/chunks/BNLc8PSv.js"];
export const stylesheets = ["_app/immutable/assets/5.BSkjJWgm.css"];
export const fonts = [];
