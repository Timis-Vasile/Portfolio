import { H as escape_html, V as attr, n as attr_class, o as ensure_array_like, r as attr_style, s as head, u as stringify } from "../../../chunks/dev.js";
//#region src/routes/materie/+page.svelte
function _page($$renderer) {
	const materie = [
		{
			icon: "💻",
			name: "Informatica",
			color: "purple",
			anni: "III · IV · V",
			desc: "Programmazione, algoritmi, strutture dati, database. Materia di indirizzo principale.",
			tags: ["tag-purple"]
		},
		{
			icon: "🌐",
			name: "Reti Informatiche",
			color: "cyan",
			anni: "III · IV · V",
			desc: "Protocolli di rete, architetture, configurazione dispositivi, sicurezza reti.",
			tags: ["tag-cyan"]
		},
		{
			icon: "📡",
			name: "Telecomunicazioni",
			color: "amber",
			anni: "III · IV",
			desc: "Segnali, trasmissione dati, modulazioni analogiche e digitali, sistemi di comunicazione.",
			tags: ["tag-amber"]
		},
		{
			icon: "🔧",
			name: "TPSI",
			color: "purple",
			anni: "III · IV · V",
			desc: "Tecnologie e Progettazione di Sistemi Informatici e di Telecomunicazioni.",
			tags: ["tag-purple"]
		},
		{
			icon: "🛠️",
			name: "GPO",
			color: "green",
			anni: "V",
			desc: "Gestione Progetto e Organizzazione d'impresa. Solo quinto anno.",
			tags: ["tag-green"]
		},
		{
			icon: "📐",
			name: "Matematica",
			color: "cyan",
			anni: "III · IV · V",
			desc: "Analisi matematica, calcolo, probabilità e statistica applicata all'informatica.",
			tags: ["tag-cyan"]
		},
		{
			icon: "🇬🇧",
			name: "Inglese",
			color: "amber",
			anni: "III · IV · V",
			desc: "Lingua inglese con focus su tematiche tecnologiche, civiche e letterarie.",
			tags: ["tag-amber"]
		},
		{
			icon: "📜",
			name: "Storia",
			color: "rose",
			anni: "III · IV · V",
			desc: "Dal Novecento ad oggi: Mafia, Nazismo, Lager, Movimento del '68 e altro.",
			tags: ["tag-rose"]
		},
		{
			icon: "📖",
			name: "Italiano",
			color: "purple",
			anni: "III · IV · V",
			desc: "Letteratura italiana, analysis testuale, scrittura. La Mattanza in terza.",
			tags: ["tag-purple"]
		},
		{
			icon: "🏃",
			name: "Educazione Fisica",
			color: "green",
			anni: "III · IV · V",
			desc: "Attività motoria, sport di squadra e individuale, benessere psicofisico.",
			tags: ["tag-green"]
		},
		{
			icon: "✝️",
			name: "Religione",
			color: "cyan",
			anni: "III · IV · V",
			desc: "Etica, valori, dialogo interreligioso e interculturale.",
			tags: ["tag-cyan"]
		},
		{
			icon: "⚖️",
			name: "Ed. Civica",
			color: "rose",
			anni: "III · IV · V",
			desc: "Trasversale a tutte le materie — min. 33 ore/anno. Tema V: Prigionia e Libertà.",
			tags: ["tag-rose"]
		}
	];
	head("1mpwqak", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Materie — Portfolio Maturità</title>`);
		});
	});
	$$renderer.push(`<div class="section"><span class="section-tag">// curriculum</span> <h1 class="section-title fade-up">Le mie <span class="grad">Materie</span></h1> <div class="divider fade-up delay-1"></div> <p class="intro fade-up delay-1 svelte-1mpwqak">Indirizzo <strong class="svelte-1mpwqak">Informatica e Telecomunicazioni</strong> — 12 materie studiate dalla terza alla quinta superiore.</p> <div class="materie-grid svelte-1mpwqak"><!--[-->`);
	const each_array = ensure_array_like(materie);
	for (let i = 0, $$length = each_array.length; i < $$length; i++) {
		let m = each_array[i];
		$$renderer.push(`<div class="materia-card card fade-up svelte-1mpwqak"${attr_style(`animation-delay: ${stringify(.05 * i)}s`)}${attr("data-color", m.color)}><div class="m-top svelte-1mpwqak"><span class="m-icon svelte-1mpwqak">${escape_html(m.icon)}</span> <span${attr_class(`m-anni tag ${stringify(m.tags[0])}`, "svelte-1mpwqak")}>${escape_html(m.anni)}</span></div> <div class="m-name svelte-1mpwqak">${escape_html(m.name)}</div> <div class="m-desc svelte-1mpwqak">${escape_html(m.desc)}</div> <div class="m-bar svelte-1mpwqak"${attr_style(`--mc: var(--accent-${stringify(m.color)})`)}></div></div>`);
	}
	$$renderer.push(`<!--]--></div></div>`);
}
//#endregion
export { _page as default };
