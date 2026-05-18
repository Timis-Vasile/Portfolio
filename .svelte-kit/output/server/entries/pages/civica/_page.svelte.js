import { H as escape_html, o as ensure_array_like, r as attr_style, s as head, u as stringify } from "../../../chunks/dev.js";
//#region src/routes/civica/+page.svelte
function _page($$renderer) {
	const primo = [
		{
			dot: "purple",
			materia: "Informatica / Ed. Civica",
			title: "«La Prigione Domestica» — Violenza di Genere",
			desc: "Analisi statistica della violenza di genere, studio della legislazione vigente (Codice Rosso, 1522) e project work sulla fattibilità tecnica di strumenti digitali di supporto e protezione per le vittime."
		},
		{
			dot: "cyan",
			materia: "Inglese",
			title: "Water and Soil Pollution",
			desc: "Water and soil pollution and the possible measures for preventing it. Studio dell'inquinamento ambientale e delle politiche di contrasto a livello globale."
		},
		{
			dot: "amber",
			materia: "Inglese",
			title: "Social and Ethical Problems of Internet",
			desc: "Analisi dei problemi sociali ed etici legati all'utilizzo di Internet: privacy, disinformazione, dipendenza digitale e cyberbullismo."
		}
	];
	const secondo = [
		{
			dot: "green",
			materia: "Informatica",
			title: "Progetto 1522 — Piattaforma Sicura",
			desc: "Realizzazione di una piattaforma sicura per la gestione di segnalazioni civiche. Database progettato tramite modello E/R, back-end in Django e front-end intuitivo per le vittime di violenza di genere."
		},
		{
			dot: "cyan",
			materia: "Inglese",
			title: "Online Dangers and Safe Internet Use",
			desc: "Studio approfondito dei pericoli online e delle strategie per un utilizzo sicuro e consapevole di Internet."
		},
		{
			dot: "rose",
			materia: "Italiano",
			title: "Incontro con Roberto Saviano",
			desc: "Incontro con Roberto Saviano a partire dal libro «L'amore mio non muore». Riflessione sulla legalità, il coraggio civile e la libertà di espressione sotto minaccia."
		},
		{
			dot: "amber",
			materia: "Inglese",
			title: "Advantages and Disadvantages of AI",
			desc: "Analisi critica dell'Intelligenza Artificiale: opportunità e rischi etici, impatto sul lavoro e sulla società, regolamentazione europea (AI Act)."
		},
		{
			dot: "purple",
			materia: "Storia / Italiano",
			title: "La Prigionia del Lager — Primo Levi",
			desc: "Primo Levi e il concetto di «zona grigia» e vergogna del sopravvissuto. Riflessione sulla memoria storica dell'Olocausto e sulla responsabilità collettiva."
		},
		{
			dot: "rose",
			materia: "Storia",
			title: "Le Altre Operazioni Naziste",
			desc: "Aktion T4 (eutanasia di massa dei disabili) e progetto Lebensborn (programma eugenetico delle SS). Approfondimento dei crimini nazisti al di là dello sterminio degli ebrei."
		},
		{
			dot: "cyan",
			materia: "Diritto / Italiano",
			title: "La Costituzione e i Principi Fondamentali",
			desc: "Studio e analisi degli articoli 1–12 della Costituzione Italiana: i principi fondamentali che definiscono la nostra Repubblica democratica."
		},
		{
			dot: "amber",
			materia: "Storia",
			title: "Il Movimento del '68",
			desc: "Il movimento studentesco e operaio del 1968: cause, sviluppi e consequences in Italia e nel mondo. La lotta per i diritti civili e la trasformazione della società."
		}
	];
	const dotColors = {
		purple: "#7c3aed",
		cyan: "#06b6d4",
		amber: "#f59e0b",
		green: "#10b981",
		rose: "#f43f5e"
	};
	head("1lmkysi", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Educazione Civica — Portfolio Maturità</title>`);
		});
	});
	$$renderer.push(`<div class="section"><span class="section-tag">// educazione civica · quinto anno</span> <h1 class="section-title fade-up"><span class="grad">Ed. Civica</span></h1> <div class="divider fade-up delay-1"></div> <div class="civica-header card fade-up delay-1 svelte-1lmkysi"><div class="ch-row svelte-1lmkysi"><div class="ch-left svelte-1lmkysi"><div class="tema-label svelte-1lmkysi">Tema dell'anno</div> <div class="tema-value svelte-1lmkysi">Prigionia e Libertà</div></div> <div class="ch-right svelte-1lmkysi"><div class="ch-info"><div class="ch-info-label svelte-1lmkysi">Referente</div> <div class="ch-info-value svelte-1lmkysi">Prof.ssa Ghio Alessia</div></div> <div class="ch-info"><div class="ch-info-label svelte-1lmkysi">Ore minime</div> <div class="ch-info-value svelte-1lmkysi">33 ore / anno</div></div> <div class="ch-info"><div class="ch-info-label svelte-1lmkysi">Legge</div> <div class="ch-info-value svelte-1lmkysi">L. 92 / 2019</div></div></div></div> <p class="ch-desc svelte-1lmkysi">Secondo la legge 92 del 2019, l'insegnamento di Educazione Civica è distribuito trasversalmente
      tra tutte le materie attorno a tre nuclei tematici: <strong class="svelte-1lmkysi">Costituzione</strong>, <strong class="svelte-1lmkysi">Sviluppo sostenibile</strong> e <strong class="svelte-1lmkysi">Cittadinanza digitale</strong>.
      Il macro-tema delle classi quinte è <strong class="svelte-1lmkysi">Prigionia e Libertà</strong>.</p> <div class="portfolio-note svelte-1lmkysi"><span class="pn-icon svelte-1lmkysi">📁</span></div></div> <div class="nuclei fade-up delay-2 svelte-1lmkysi"><div class="nucleo n-purple svelte-1lmkysi"><span>⚖️</span> Costituzione</div> <div class="nucleo n-green svelte-1lmkysi"><span>🌱</span> Sviluppo sostenibile</div> <div class="nucleo n-cyan svelte-1lmkysi"><span>💻</span> Cittadinanza digitale</div></div> <div class="periodo fade-up delay-2 svelte-1lmkysi"><div class="periodo-header svelte-1lmkysi"><span class="periodo-num svelte-1lmkysi">01</span> <h2 class="periodo-title svelte-1lmkysi">Primo Periodo Didattico</h2></div> <div class="items-list svelte-1lmkysi"><!--[-->`);
	const each_array = ensure_array_like(primo);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let item = each_array[$$index];
		$$renderer.push(`<div class="civica-item svelte-1lmkysi"><div class="ci-dot svelte-1lmkysi"${attr_style(`background: ${stringify(dotColors[item.dot])}; box-shadow: 0 0 8px ${stringify(dotColors[item.dot])}80;`)}></div> <div class="ci-body svelte-1lmkysi"><div class="ci-materia svelte-1lmkysi">${escape_html(item.materia)}</div> <div class="ci-title svelte-1lmkysi">${escape_html(item.title)}</div> <div class="ci-desc svelte-1lmkysi">${escape_html(item.desc)}</div></div></div>`);
	}
	$$renderer.push(`<!--]--></div></div> <div class="periodo fade-up delay-3 svelte-1lmkysi"><div class="periodo-header svelte-1lmkysi"><span class="periodo-num svelte-1lmkysi">02</span> <h2 class="periodo-title svelte-1lmkysi">Secondo Periodo Didattico</h2></div> <div class="items-list svelte-1lmkysi"><!--[-->`);
	const each_array_1 = ensure_array_like(secondo);
	for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
		let item = each_array_1[$$index_1];
		$$renderer.push(`<div class="civica-item svelte-1lmkysi"><div class="ci-dot svelte-1lmkysi"${attr_style(`background: ${stringify(dotColors[item.dot])}; box-shadow: 0 0 8px ${stringify(dotColors[item.dot])}80;`)}></div> <div class="ci-body svelte-1lmkysi"><div class="ci-materia svelte-1lmkysi">${escape_html(item.materia)}</div> <div class="ci-title svelte-1lmkysi">${escape_html(item.title)}</div> <div class="ci-desc svelte-1lmkysi">${escape_html(item.desc)}</div></div></div>`);
	}
	$$renderer.push(`<!--]--></div></div></div>`);
}
//#endregion
export { _page as default };
