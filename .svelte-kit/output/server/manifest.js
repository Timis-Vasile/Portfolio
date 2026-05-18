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
		client: {start:"_app/immutable/entry/start.DMPCt8Ru.js",app:"_app/immutable/entry/app.CJ6_5KbC.js",imports:["_app/immutable/entry/start.DMPCt8Ru.js","_app/immutable/chunks/-XqryeDy.js","_app/immutable/chunks/UBuZ431m.js","_app/immutable/entry/app.CJ6_5KbC.js","_app/immutable/chunks/UBuZ431m.js","_app/immutable/chunks/B0BvW1x3.js","_app/immutable/chunks/Cfug8aQt.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
