<script>
  const primo = [
    {
      dot: 'purple',
      materia: 'Informatica / Ed. Civica',
      title: '«La Prigione Domestica» — Violenza di Genere',
      desc: 'Analisi statistica della violenza di genere, studio della legislazione vigente (Codice Rosso, 1522) e project work sulla fattibilità tecnica di strumenti digitali di supporto e protezione per le vittime.',
    },
    {
      dot: 'cyan',
      materia: 'Inglese',
      title: 'Water and Soil Pollution',
      desc: 'Water and soil pollution and the possible measures for preventing it. Studio dell\'inquinamento ambientale e delle politiche di contrasto a livello globale.',
    },
    {
      dot: 'amber',
      materia: 'Inglese',
      title: 'Social and Ethical Problems of Internet',
      desc: 'Analisi dei problemi sociali ed etici legati all\'utilizzo di Internet: privacy, disinformazione, dipendenza digitale e cyberbullismo.',
    },
  ];

  const secondo = [
    {
      dot: 'green',
      materia: 'Informatica',
      title: 'Progetto 1522 — Piattaforma Sicura',
      desc: 'Realizzazione di una piattaforma sicura per la gestione di segnalazioni civiche. Database progettato tramite modello E/R, back-end in Django e front-end intuitivo per le vittime di violenza di genere.',
    },
    {
      dot: 'cyan',
      materia: 'Inglese',
      title: 'Online Dangers and Safe Internet Use',
      desc: 'Studio approfondito dei pericoli online e delle strategie per un utilizzo sicuro e consapevole di Internet.',
    },
    {
      dot: 'rose',
      materia: 'Italiano',
      title: 'Incontro con Roberto Saviano',
      desc: 'Incontro con Roberto Saviano a partire dal libro «L\'amore mio non muore». Riflessione sulla legalità, il coraggio civile e la libertà di espressione sotto minaccia.',
    },
    {
      dot: 'amber',
      materia: 'Inglese',
      title: 'Advantages and Disadvantages of AI',
      desc: 'Analisi critica dell\'Intelligenza Artificiale: opportunità e rischi etici, impatto sul lavoro e sulla società, regolamentazione europea (AI Act).',
    },
    {
      dot: 'purple',
      materia: 'Storia / Italiano',
      title: 'La Prigionia del Lager — Primo Levi',
      desc: 'Primo Levi e il concetto di «zona grigia» e vergogna del sopravvissuto. Riflessione sulla memoria storica dell\'Olocausto e sulla responsabilità collettiva.',
    },
    {
      dot: 'rose',
      materia: 'Storia',
      title: 'Le Altre Operazioni Naziste',
      desc: 'Aktion T4 (eutanasia di massa dei disabili) e progetto Lebensborn (programma eugenetico delle SS). Approfondimento dei crimini nazisti al di là dello sterminio degli ebrei.',
    },
    {
      dot: 'cyan',
      materia: 'Diritto / Italiano',
      title: 'La Costituzione e i Principi Fondamentali',
      desc: 'Studio e analisi degli articoli 1–12 della Costituzione Italiana: i principi fondamentali che definiscono la nostra Repubblica democratica.',
    },
    {
      dot: 'amber',
      materia: 'Storia',
      title: 'Il Movimento del \'68',
      desc: 'Il movimento studentesco e operaio del 1968: cause, sviluppi e conseguenze in Italia e nel mondo. La lotta per i diritti civili e la trasformazione della società.',
    },
  ];

  const dotColors = {
    purple: '#7c3aed',
    cyan:   '#06b6d4',
    amber:  '#f59e0b',
    green:  '#10b981',
    rose:   '#f43f5e',
  };
</script>

<svelte:head>
  <title>Educazione Civica — Portfolio Maturità</title>
</svelte:head>

<div class="section">
  <span class="section-tag">// educazione civica · quinto anno</span>
  <h1 class="section-title fade-up"><span class="grad">Ed. Civica</span></h1>
  <div class="divider fade-up delay-1"></div>

  <!-- Header informativo -->
  <div class="civica-header card fade-up delay-1">
    <div class="ch-row">
      <div class="ch-left">
        <div class="tema-label">Tema dell'anno</div>
        <div class="tema-value">Prigionia e Libertà</div>
      </div>
      <div class="ch-right">
        <div class="ch-info">
          <div class="ch-info-label">Referente</div>
          <div class="ch-info-value">Prof.ssa Ghio Alessia</div>
        </div>
        <div class="ch-info">
          <div class="ch-info-label">Ore minime</div>
          <div class="ch-info-value">33 ore / anno</div>
        </div>
        <div class="ch-info">
          <div class="ch-info-label">Legge</div>
          <div class="ch-info-value">L. 92 / 2019</div>
        </div>
      </div>
    </div>

    <p class="ch-desc">
      Secondo la legge 92 del 2019, l'insegnamento di Educazione Civica è distribuito trasversalmente
      tra tutte le materie attorno a tre nuclei tematici: <strong>Costituzione</strong>,
      <strong>Sviluppo sostenibile</strong> e <strong>Cittadinanza digitale</strong>.
      Il macro-tema delle classi quinte è <strong>Prigionia e Libertà</strong>.
    </p>

    <div class="portfolio-note">
      <span class="pn-icon">📁</span>
      <span>Gli studenti hanno progettato e realizzato un <strong>Portfolio Digitale</strong> come strumento di
      personal branding e testimonianza del proprio percorso di crescita civile.</span>
    </div>
  </div>

  <!-- Nuclei tematici -->
  <div class="nuclei fade-up delay-2">
    <div class="nucleo n-purple"><span>⚖️</span> Costituzione</div>
    <div class="nucleo n-green"><span>🌱</span> Sviluppo sostenibile</div>
    <div class="nucleo n-cyan"><span>💻</span> Cittadinanza digitale</div>
  </div>

  <!-- PRIMO PERIODO -->
  <div class="periodo fade-up delay-2">
    <div class="periodo-header">
      <span class="periodo-num">01</span>
      <h2 class="periodo-title">Primo Periodo Didattico</h2>
    </div>

    <div class="items-list">
      {#each primo as item}
        <div class="civica-item">
          <div class="ci-dot" style="background: {dotColors[item.dot]}; box-shadow: 0 0 8px {dotColors[item.dot]}80;"></div>
          <div class="ci-body">
            <div class="ci-materia">{item.materia}</div>
            <div class="ci-title">{item.title}</div>
            <div class="ci-desc">{item.desc}</div>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- SECONDO PERIODO -->
  <div class="periodo fade-up delay-3">
    <div class="periodo-header">
      <span class="periodo-num">02</span>
      <h2 class="periodo-title">Secondo Periodo Didattico</h2>
    </div>

    <div class="items-list">
      {#each secondo as item}
        <div class="civica-item">
          <div class="ci-dot" style="background: {dotColors[item.dot]}; box-shadow: 0 0 8px {dotColors[item.dot]}80;"></div>
          <div class="ci-body">
            <div class="ci-materia">{item.materia}</div>
            <div class="ci-title">{item.title}</div>
            <div class="ci-desc">{item.desc}</div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .civica-header {
    background: linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(6,182,212,0.06) 100%);
    border-color: rgba(124,58,237,0.2);
    margin-bottom: 2rem;
    padding: 2rem;
  }

  .ch-row { display: flex; gap: 2rem; flex-wrap: wrap; margin-bottom: 1.25rem; align-items: flex-start; }

  .ch-left { flex: 1; min-width: 200px; }
  .tema-label { font-family: 'DM Mono', monospace; font-size: 0.68rem; color: #7777aa; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.3rem; }
  .tema-value {
    font-family: 'Syne', sans-serif;
    font-size: 1.6rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    background: linear-gradient(135deg, #7c3aed, #f43f5e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .ch-right { display: flex; gap: 1.5rem; flex-wrap: wrap; }
  .ch-info {}
  .ch-info-label { font-size: 0.68rem; color: #7777aa; font-family: 'DM Mono', monospace; text-transform: uppercase; letter-spacing: 0.08em; }
  .ch-info-value { font-size: 0.9rem; font-weight: 600; margin-top: 2px; }

  .ch-desc { color: #9999bb; font-size: 0.88rem; line-height: 1.75; margin-bottom: 1.25rem; }
  .ch-desc strong { color: #eeeeee; }

  .portfolio-note {
    display: flex;
    gap: 0.75rem;
    align-items: flex-start;
    background: rgba(16,185,129,0.07);
    border: 1px solid rgba(16,185,129,0.2);
    border-radius: 10px;
    padding: 1rem 1.25rem;
    font-size: 0.85rem;
    color: #9999bb;
    line-height: 1.6;
  }
  .portfolio-note strong { color: #6ee7b7; }
  .pn-icon { font-size: 1.1rem; flex-shrink: 0; }

  .nuclei {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    margin-bottom: 3rem;
  }

  .nucleo {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 18px;
    border-radius: 100px;
    font-size: 0.82rem;
    font-weight: 600;
    border: 1px solid;
  }

  .n-purple { background: rgba(124,58,237,0.1); border-color: rgba(124,58,237,0.25); color: #c4b5fd; }
  .n-green  { background: rgba(16,185,129,0.1); border-color: rgba(16,185,129,0.25); color: #6ee7b7; }
  .n-cyan   { background: rgba(6,182,212,0.1); border-color: rgba(6,182,212,0.25); color: #67e8f9; }

  .periodo { margin-bottom: 3rem; }

  .periodo-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(255,255,255,0.07);
  }

  .periodo-num {
    font-family: 'Syne', sans-serif;
    font-size: 2.5rem;
    font-weight: 800;
    color: rgba(255,255,255,0.06);
    line-height: 1;
    letter-spacing: -0.04em;
  }

  .periodo-title {
    font-family: 'Syne', sans-serif;
    font-size: 1.15rem;
    font-weight: 700;
    letter-spacing: -0.01em;
  }

  .items-list { display: flex; flex-direction: column; gap: 0.75rem; }

  .civica-item {
    display: flex;
    gap: 1.25rem;
    align-items: flex-start;
    background: #13131a;
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 12px;
    padding: 1.25rem 1.5rem;
    transition: border-color 0.2s;
  }

  .civica-item:hover { border-color: rgba(255,255,255,0.13); }

  .ci-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
    margin-top: 6px;
  }

  .ci-body { flex: 1; }

  .ci-materia {
    font-family: 'DM Mono', monospace;
    font-size: 0.66rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #7777aa;
    margin-bottom: 0.3rem;
  }

  .ci-title {
    font-family: 'Syne', sans-serif;
    font-size: 0.98rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
    letter-spacing: -0.01em;
  }

  .ci-desc { font-size: 0.82rem; color: #8888aa; line-height: 1.65; }
</style>
