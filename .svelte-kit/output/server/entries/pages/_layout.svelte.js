import { m as base } from "../../chunks/environment.js";
import { H as escape_html, V as attr, d as unsubscribe_stores, i as bind_props, l as store_get, n as attr_class, o as ensure_array_like, r as attr_style, tt as getContext, u as stringify } from "../../chunks/dev.js";
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
		const prerender = true;
		let { children } = $$props;
		let scrollProgress = 0;
		const navItems = [
			{
				href: `${base}`,
				label: "🏠 Home"
			},
			{
				href: `${base}/chisono`,
				label: "👤 Chi Sono"
			},
			{
				href: `${base}/materie`,
				label: "📚 Materie"
			},
			{
				href: `${base}/progetti`,
				label: "💡 Progetti"
			},
			{
				href: `${base}/civica`,
				label: "⚖️ Ed. Civica"
			}
		];
		$$renderer.push(`<div class="progress-bar"${attr_style(`width: ${stringify(scrollProgress)}%`)}></div> <nav class="main-nav"><a${attr("href", `${stringify(base)}/`)} class="nav-logo">Portfolio Maturità</a> <ul class="nav-links"><!--[-->`);
		const each_array = ensure_array_like(navItems);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let item = each_array[$$index];
			$$renderer.push(`<li><a${attr("href", item.href)}${attr_class("", void 0, { "active": store_get($$store_subs ??= {}, "$page", page).url.pathname === item.href || store_get($$store_subs ??= {}, "$page", page).url.pathname === item.href + "/" })}>${escape_html(item.label)}</a></li>`);
		}
		$$renderer.push(`<!--]--></ul></nav> <main class="page-wrapper">`);
		children($$renderer);
		$$renderer.push(`<!----></main> <footer class="main-footer">Portfolio Digitale · Esame di Stato 2025/2026 ·</footer>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, { prerender });
	});
}
//#endregion
export { _layout as default };
