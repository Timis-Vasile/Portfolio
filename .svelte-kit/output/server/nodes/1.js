

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.QXEhVebK.js","_app/immutable/chunks/C8SUvTu-.js","_app/immutable/chunks/SqhCKVx-.js","_app/immutable/chunks/Cfug8aQt.js"];
export const stylesheets = [];
export const fonts = [];
