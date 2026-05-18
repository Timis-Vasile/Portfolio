import { m as base } from "../../chunks/environment.js";
import { V as attr, d as unsubscribe_stores, l as store_get, n as attr_class, r as attr_style, tt as getContext, u as stringify } from "../../chunks/dev.js";
import "../../chunks/client.js";
import "../../chunks/paths.js";
//#region node_modules/@sveltejs/kit/src/runtime/app/stores.js
/**
* A function that returns all of the contextual stores. On the server, this must be called during component initialization.
* Only use this if you need to defer store subscription until after the component has mounted, for some reason.
*
* @deprecated Use `$app/state` instead (requires Svelte 5, [see docs for more info](https://svelte.dev/docs/kit/migrating-to-sveltekit-2#SvelteKit-2.12:-$app-stores-deprecated))
*/
var getStores = () => {
	const stores$1 = getContext("__svelte__");
	return {
		/** @type {typeof page} */
		page: { subscribe: stores$1.page.subscribe },
		/** @type {typeof navigating} */
		navigating: { subscribe: stores$1.navigating.subscribe },
		/** @type {typeof updated} */
		updated: stores$1.updated
	};
};
/**
* A readable store whose value contains page data.
*
* On the server, this store can only be subscribed to during component initialization. In the browser, it can be subscribed to at any time.
*
* @deprecated Use `page` from `$app/state` instead (requires Svelte 5, [see docs for more info](https://svelte.dev/docs/kit/migrating-to-sveltekit-2#SvelteKit-2.12:-$app-stores-deprecated))
* @type {import('svelte/store').Readable<import('@sveltejs/kit').Page>}
*/
var page = { subscribe(fn) {
	return getStores().page.subscribe(fn);
} };
//#endregion
//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { children } = $$props;
		$$renderer.push(`<div class="progress-bar"${attr_style(`width: ${stringify(0)}%`)}></div> <nav class="main-nav"><a${attr("href", `${stringify(base)}/Portfolio/`)} class="nav-logo" data-sveltekit-reload="">Portfolio Maturità</a> <ul class="nav-links"><li><a${attr("href", `${stringify(base)}/Portfolio/`)} data-sveltekit-reload=""${attr_class("", void 0, { "active": store_get($$store_subs ??= {}, "$page", page).url.pathname === "/Portfolio/" || store_get($$store_subs ??= {}, "$page", page).url.pathname === "/Portfolio" })}>🏠 Home</a></li> <li><a${attr("href", `${stringify(base)}/Portfolio/chisono`)} data-sveltekit-reload=""${attr_class("", void 0, { "active": store_get($$store_subs ??= {}, "$page", page).url.pathname === "/Portfolio/chisono" })}>👤 Chi Sono</a></li> <li><a${attr("href", `${stringify(base)}/Portfolio/materie`)} data-sveltekit-reload=""${attr_class("", void 0, { "active": store_get($$store_subs ??= {}, "$page", page).url.pathname === "/Portfolio/materie" })}>📚 Materie</a></li> <li><a${attr("href", `${stringify(base)}/Portfolio/progetti`)} data-sveltekit-reload=""${attr_class("", void 0, { "active": store_get($$store_subs ??= {}, "$page", page).url.pathname === "/Portfolio/progetti" })}>💡 Progetti</a></li> <li><a${attr("href", `${stringify(base)}/Portfolio/civica`)} data-sveltekit-reload=""${attr_class("", void 0, { "active": store_get($$store_subs ??= {}, "$page", page).url.pathname === "/Portfolio/civica" })}>⚖️ Ed. Civica</a></li></ul></nav> <main class="page-wrapper">`);
		children($$renderer);
		$$renderer.push(`<!----></main> <footer class="main-footer">Portfolio Digitale · Esame di Stato 2025/2026 ·</footer>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
export { _layout as default };
