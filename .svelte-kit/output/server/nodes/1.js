

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.C2qiPs-X.js","_app/immutable/chunks/UBuZ431m.js","_app/immutable/chunks/kmeAkWNc.js","_app/immutable/chunks/Cfug8aQt.js"];
export const stylesheets = [];
export const fonts = [];
