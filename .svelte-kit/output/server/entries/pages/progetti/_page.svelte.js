import { H as escape_html, n as attr_class, o as ensure_array_like, r as attr_style, s as head, u as stringify } from "../../../chunks/dev.js";
//#region src/routes/progetti/+page.svelte
function _page($$renderer) {
	const progetti = [
		{
			anno: "3° Anno",
			annoColor: "#7c3aed",
			materia: "Informatica",
			materiaColor: "#7c3aed",
			title: "Calcolatore Codice Fiscale",
			desc: "Applicazione per il calcolo del codice fiscale italiano a partire dai dati anagrafici. Implementazione dell'algoritmo ufficiale con validazione completa dell'input.",
			tags: ["tag-purple", "tag-cyan"],
			tagLabels: ["Algoritmi", "Validazione input"],
			placeholder: true
		},
		{
			anno: "3° Anno",
			annoColor: "#7c3aed",
			materia: "Italiano",
			materiaColor: "#aaaacc",
			title: "La Mattanza",
			desc: "Elaborato sulla pesca tradizionale del tonno in Sicilia come metafora letteraria e antropologica. Analisi dei testi e approfondimento culturale.",
			tags: ["tag-amber", "tag-rose"],
			tagLabels: ["Analisi testuale", "Cultura siciliana"],
			placeholder: true
		},
		{
			anno: "3° Anno",
			annoColor: "#7c3aed",
			materia: "Storia",
			materiaColor: "#aaaacc",
			title: "PowerPoint — La Mafia",
			desc: "Presentazione sulla storia, struttura e diffusione della criminalità organizzata italiana. Analisi del fenomeno dalle origini ai giorni nostri.",
			tags: ["tag-rose", "tag-amber"],
			tagLabels: ["Storia contemporanea", "Presentazione"],
			placeholder: true
		},
		{
			anno: "4° Anno",
			annoColor: "#06b6d4",
			materia: "Informatica",
			materiaColor: "#06b6d4",
			title: "Quiz della Patente",
			desc: "Applicazione interattiva per simulare l'esame della patente di guida. Domande randomizzate, timer, punteggio e sistema di revisione delle risposte errate.",
			tags: ["tag-cyan", "tag-purple"],
			tagLabels: ["Web App", "Database"],
			placeholder: true
		},
		{
			anno: "5° Anno",
			annoColor: "#10b981",
			materia: "Informatica / Ed. Civica",
			materiaColor: "#10b981",
			title: "Progetto 1522 — Piattaforma Sicura",
			desc: "Realizzazione di una piattaforma web sicura per la gestione di segnalazioni civiche legate alla violenza di genere. Database progettato tramite modello E/R, back-end in Django, front-end intuitivo.",
			tags: [
				"tag-green",
				"tag-purple",
				"tag-cyan"
			],
			tagLabels: [
				"Django",
				"Database E/R",
				"HTML/CSS"
			],
			placeholder: false
		}
	];
	head("4x32a7", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Progetti — Portfolio Maturità</title>`);
		});
	});
	$$renderer.push(`<div class="section"><span class="section-tag">// lavori realizzati</span> <h1 class="section-title fade-up">I miei <span class="grad">Progetti</span></h1> <div class="divider fade-up delay-1"></div> <div class="placeholder fade-up delay-1"></div> <div class="progetti-list svelte-4x32a7"><!--[-->`);
	const each_array = ensure_array_like(progetti);
	for (let i = 0, $$length = each_array.length; i < $$length; i++) {
		let p = each_array[i];
		$$renderer.push(`<article class="progetto fade-up svelte-4x32a7"${attr_style(`animation-delay: ${stringify(.07 * i)}s`)}><div class="p-left svelte-4x32a7"><div class="p-anno svelte-4x32a7"${attr_style(`color: ${stringify(p.annoColor)};`)}>${escape_html(p.anno)}</div> <div class="p-line svelte-4x32a7"${attr_style(`background: ${stringify(p.annoColor)};`)}></div></div> <div class="p-card card svelte-4x32a7"><div class="p-materia svelte-4x32a7"${attr_style(`color: ${stringify(p.materiaColor)};`)}>${escape_html(p.materia)}</div> <h2 class="p-title svelte-4x32a7">${escape_html(p.title)}</h2> <p class="p-desc svelte-4x32a7">${escape_html(p.desc)}</p> `);
		if (p.placeholder) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="p-note svelte-4x32a7"></p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <div class="tag-row"><!--[-->`);
		const each_array_1 = ensure_array_like(p.tags);
		for (let j = 0, $$length = each_array_1.length; j < $$length; j++) {
			let t = each_array_1[j];
			$$renderer.push(`<span${attr_class(`tag ${stringify(t)}`, "svelte-4x32a7")}>${escape_html(p.tagLabels[j])}</span>`);
		}
		$$renderer.push(`<!--]--></div></div></article>`);
	}
	$$renderer.push(`<!--]--></div></div>`);
}
//#endregion
export { _page as default };
