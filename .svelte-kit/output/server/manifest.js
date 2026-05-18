export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "Portfolio/_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.BCTJR4fS.js",app:"_app/immutable/entry/app.BmdpphSk.js",imports:["_app/immutable/entry/start.BCTJR4fS.js","_app/immutable/chunks/SqhCKVx-.js","_app/immutable/chunks/C8SUvTu-.js","_app/immutable/entry/app.BmdpphSk.js","_app/immutable/chunks/C8SUvTu-.js","_app/immutable/chunks/B0BvW1x3.js","_app/immutable/chunks/Cfug8aQt.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/Portfolio/","/Portfolio/chisono","/Portfolio/civica","/Portfolio/materie","/Portfolio/progetti"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
