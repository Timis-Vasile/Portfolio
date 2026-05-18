import { m as base } from "../../chunks/environment.js";
import { H as escape_html, V as attr, i as bind_props, n as attr_class, o as ensure_array_like, r as attr_style, s as head, u as stringify } from "../../chunks/dev.js";
import "../../chunks/paths.js";
//#region src/routes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const prerender = true;
		let mounted = false;
		const cards = [
			{
				href: "/chisono",
				icon: "👤",
				title: "Chi Sono",
				sub: "La mia storia e i miei interessi",
				color: "#7c3aed"
			},
			{
				href: "/materie",
				icon: "📚",
				title: "Materie",
				sub: "Informatica, Reti, TPSI e molto altro",
				color: "#06b6d4"
			},
			{
				href: "/progetti",
				icon: "💡",
				title: "Progetti",
				sub: "Dalla terza alla quinta: i miei lavori",
				color: "#f59e0b"
			},
			{
				href: "/civica",
				icon: "⚖️",
				title: "Ed. Civica",
				sub: "Prigionia e Libertà — Anno V",
				color: "#f43f5e"
			}
		];
		head("1uha8ag", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Portfolio Maturità</title>`);
			});
		});
		$$renderer.push(`<section${attr_class("hero svelte-1uha8ag", void 0, { "visible": mounted })}><div class="hero-glow svelte-1uha8ag"></div> <div class="hero-glow hero-glow-2 svelte-1uha8ag"></div> <div class="hero-inner svelte-1uha8ag"><span class="badge fade-up svelte-1uha8ag">✦ Portfolio Digitale · Maturità 2026</span> <h1 class="hero-title fade-up delay-1 svelte-1uha8ag"><span class="line1 svelte-1uha8ag">Il mio</span> <span class="line2 svelte-1uha8ag">Percorso</span></h1> <p class="hero-sub fade-up delay-2 svelte-1uha8ag">Cinque anni di studio, crescita e progetti —<br/> raccontati attraverso questo portfolio digitale.</p> <div class="cards-grid fade-up delay-3 svelte-1uha8ag"><!--[-->`);
		const each_array = ensure_array_like(cards);
		for (let i = 0, $$length = each_array.length; i < $$length; i++) {
			let card = each_array[i];
			$$renderer.push(`<a${attr("href", `${stringify(base)}${stringify(card.href)}`)} class="hero-card svelte-1uha8ag"${attr_style(`--c: ${stringify(card.color)}`)}><span class="hero-card-bar svelte-1uha8ag"></span> <span class="hero-card-icon svelte-1uha8ag">${escape_html(card.icon)}</span> <strong class="hero-card-title svelte-1uha8ag">${escape_html(card.title)}</strong> <span class="hero-card-sub svelte-1uha8ag">${escape_html(card.sub)}</span></a>`);
		}
		$$renderer.push(`<!--]--></div></div></section>`);
		bind_props($$props, { prerender });
	});
}
//#endregion
export { _page as default };
