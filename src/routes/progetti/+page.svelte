<script>


  const progetti = [
    {
      anno: '3° Anno', annoColor: '#7c3aed',
      materia: 'Informatica',
      materiaColor: '#7c3aed',
      title: 'Calcolatore Codice Fiscale',
      desc: 'Applicazione per il calcolo del codice fiscale italiano a partire dai dati anagrafici. Implementazione dell\'algoritmo ufficiale con validazione completa dell\'input.',
      tags: ['tag-purple', 'tag-cyan'],
      tagLabels: ['Algoritmi', 'Validazione input'],
      placeholder: true,
    },
    {
      anno: '3° Anno', annoColor: '#7c3aed',
      materia: 'Italiano',
      materiaColor: '#aaaacc',
      title: 'La Mattanza',
      desc: 'Elaborato sulla pesca tradizionale del tonno in Sicilia come metafora letteraria e antropologica. Analisi dei testi e approfondimento culturale.',
      tags: ['tag-amber', 'tag-rose'],
      tagLabels: ['Analisi testuale', 'Cultura siciliana'],
      placeholder: true,
    },
    {
      anno: '3° Anno', annoColor: '#7c3aed',
      materia: 'Storia',
      materiaColor: '#aaaacc',
      title: 'PowerPoint — La Mafia',
      desc: 'Presentazione sulla storia, struttura e diffusione della criminalità organizzata italiana. Analisi del fenomeno dalle origini ai giorni nostri.',
      tags: ['tag-rose', 'tag-amber'],
      tagLabels: ['Storia contemporanea', 'Presentazione'],
      placeholder: true,
    },
    {
      anno: '4° Anno', annoColor: '#06b6d4',
      materia: 'Informatica',
      materiaColor: '#06b6d4',
      title: 'Quiz della Patente',
      desc: 'Applicazione interattiva per simulare l\'esame della patente di guida. Domande randomizzate, timer, punteggio e sistema di revisione delle risposte errate.',
      tags: ['tag-cyan', 'tag-purple'],
      tagLabels: ['Web App', 'Database'],
      placeholder: true,
    },
    {
      anno: '5° Anno', annoColor: '#10b981',
      materia: 'Informatica / Ed. Civica',
      materiaColor: '#10b981',
      title: 'Progetto 1522 — Piattaforma Sicura',
      desc: 'Realizzazione di una piattaforma web sicura per la gestione di segnalazioni civiche legate alla violenza di genere. Database progettato tramite modello E/R, back-end in Django, front-end intuitivo.',
      tags: ['tag-green', 'tag-purple', 'tag-cyan'],
      tagLabels: ['Django', 'Database E/R', 'HTML/CSS'],
      placeholder: false,
    },
  ];
</script>

<svelte:head>
  <title>Progetti — Portfolio Maturità</title>
</svelte:head>

<div class="section">
  <span class="section-tag">// lavori realizzati</span>
  <h1 class="section-title fade-up">I miei <span class="grad">Progetti</span></h1>
  <div class="divider fade-up delay-1"></div>

  <div class="placeholder fade-up delay-1">
  </div>

  <div class="progetti-list">
    {#each progetti as p, i}
      <article class="progetto fade-up" style="animation-delay: {0.07 * i}s">
        <div class="p-left">
          <div class="p-anno" style="color: {p.annoColor};">{p.anno}</div>
          <div class="p-line" style="background: {p.annoColor};"></div>
        </div>
        <div class="p-card card">
          <div class="p-materia" style="color: {p.materiaColor};">{p.materia}</div>
          <h2 class="p-title">{p.title}</h2>
          <p class="p-desc">{p.desc}</p>
          {#if p.placeholder}
            <p class="p-note">
            </p>
          {/if}
          <div class="tag-row">
            {#each p.tags as t, j}
              <span class="tag {t}">{p.tagLabels[j]}</span>
            {/each}
          </div>
        </div>
      </article>
    {/each}
  </div>
</div>

<style>
  .progetti-list { display: flex; flex-direction: column; gap: 1.5rem; }

  .progetto { display: grid; grid-template-columns: 80px 1fr; gap: 1.5rem; align-items: start; }

  .p-left { display: flex; flex-direction: column; align-items: center; padding-top: 1.5rem; }

  .p-anno {
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-align: center;
    white-space: nowrap;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    margin-bottom: 8px;
  }

  .p-line { width: 2px; flex: 1; border-radius: 1px; min-height: 40px; opacity: 0.4; }

  .p-card { width: 100%; }

  .p-materia {
    font-family: 'DM Mono', monospace;
    font-size: 0.68rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  .p-title {
    font-family: 'Syne', sans-serif;
    font-size: 1.35rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 0.75rem;
  }

  .p-desc { color: #9999bb; font-size: 0.9rem; line-height: 1.7; margin-bottom: 0.5rem; }

  .p-note {
    font-family: 'DM Mono', monospace;
    font-size: 0.75rem;
    color: #7777aa;
    margin-bottom: 0.75rem;
  }

  @media (max-width: 560px) {
    .progetto { grid-template-columns: 1fr; }
    .p-left { flex-direction: row; padding-top: 0; margin-bottom: 0.5rem; }
    .p-anno { writing-mode: initial; transform: none; margin-bottom: 0; margin-right: 8px; }
    .p-line { display: none; }
  }
</style>