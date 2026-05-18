<script>


  const materie = [
    {
      icon: '💻', name: 'Informatica', color: 'purple', anni: 'III · IV · V',
      desc: 'Programmazione, algoritmi, strutture dati, database. Materia di indirizzo principale.',
      tags: ['tag-purple']
    },
    {
      icon: '🌐', name: 'Reti Informatiche', color: 'cyan', anni: 'III · IV · V',
      desc: 'Protocolli di rete, architetture, configurazione dispositivi, sicurezza reti.',
      tags: ['tag-cyan']
    },
    {
      icon: '📡', name: 'Telecomunicazioni', color: 'amber', anni: 'III · IV',
      desc: 'Segnali, trasmissione dati, modulazioni analogiche e digitali, sistemi di comunicazione.',
      tags: ['tag-amber']
    },
    {
      icon: '🔧', name: 'TPSI', color: 'purple', anni: 'III · IV · V',
      desc: 'Tecnologie e Progettazione di Sistemi Informatici e di Telecomunicazioni.',
      tags: ['tag-purple']
    },
    {
      icon: '🛠️', name: 'GPO', color: 'green', anni: 'V',
      desc: 'Gestione Progetto e Organizzazione d\'impresa. Solo quinto anno.',
      tags: ['tag-green']
    },
    {
      icon: '📐', name: 'Matematica', color: 'cyan', anni: 'III · IV · V',
      desc: 'Analisi matematica, calcolo, probabilità e statistica applicata all\'informatica.',
      tags: ['tag-cyan']
    },
    {
      icon: '🇬🇧', name: 'Inglese', color: 'amber', anni: 'III · IV · V',
      desc: 'Lingua inglese con focus su tematiche tecnologiche, civiche e letterarie.',
      tags: ['tag-amber']
    },
    {
      icon: '📜', name: 'Storia', color: 'rose', anni: 'III · IV · V',
      desc: 'Dal Novecento ad oggi: Mafia, Nazismo, Lager, Movimento del \'68 e altro.',
      tags: ['tag-rose']
    },
    {
      icon: '📖', name: 'Italiano', color: 'purple', anni: 'III · IV · V',
      desc: 'Letteratura italiana, analysis testuale, scrittura. La Mattanza in terza.',
      tags: ['tag-purple']
    },
    {
      icon: '🏃', name: 'Educazione Fisica', color: 'green', anni: 'III · IV · V',
      desc: 'Attività motoria, sport di squadra e individuale, benessere psicofisico.',
      tags: ['tag-green']
    },
    {
      icon: '✝️', name: 'Religione', color: 'cyan', anni: 'III · IV · V',
      desc: 'Etica, valori, dialogo interreligioso e interculturale.',
      tags: ['tag-cyan']
    },
    {
      icon: '⚖️', name: 'Ed. Civica', color: 'rose', anni: 'III · IV · V',
      desc: 'Trasversale a tutte le materie — min. 33 ore/anno. Tema V: Prigionia e Libertà.',
      tags: ['tag-rose']
    },
  ];
</script>

<svelte:head>
  <title>Materie — Portfolio Maturità</title>
</svelte:head>

<div class="section">
  <span class="section-tag">// curriculum</span>
  <h1 class="section-title fade-up">Le mie <span class="grad">Materie</span></h1>
  <div class="divider fade-up delay-1"></div>

  <p class="intro fade-up delay-1">
    Indirizzo <strong>Informatica e Telecomunicazioni</strong> — 12 materie studiate dalla terza alla quinta superiore.
  </p>

  <div class="materie-grid">
    {#each materie as m, i}
      <div class="materia-card card fade-up" style="animation-delay: {0.05 * i}s" data-color={m.color}>
        <div class="m-top">
          <span class="m-icon">{m.icon}</span>
          <span class="m-anni tag {m.tags[0]}">{m.anni}</span>
        </div>
        <div class="m-name">{m.name}</div>
        <div class="m-desc">{m.desc}</div>
        <div class="m-bar" style="--mc: var(--accent-{m.color})"></div>
      </div>
    {/each}
  </div>
</div>

<style>
  .intro {
    color: #7777aa;
    margin-bottom: 2.5rem;
    font-size: 0.95rem;
    line-height: 1.7;
  }
  .intro strong { color: #eeeeee; }

  .materie-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }

  .materia-card {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding-bottom: 1.75rem;
  }

  .m-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4px;
  }

  .m-icon { font-size: 1.6rem; }

  .m-anni { font-size: 0.68rem !important; padding: 3px 10px !important; }

  .m-name {
    font-family: 'Syne', sans-serif;
    font-size: 1.05rem;
    font-weight: 700;
  }

  .m-desc { font-size: 0.8rem; color: #7777aa; line-height: 1.5; }

  .m-bar {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
  }

  [data-color="purple"] .m-bar { background: linear-gradient(90deg, #7c3aed, transparent); }
  [data-color="cyan"]   .m-bar { background: linear-gradient(90deg, #06b6d4, transparent); }
  [data-color="amber"]  .m-bar { background: linear-gradient(90deg, #f59e0b, transparent); }
  [data-color="green"]  .m-bar { background: linear-gradient(90deg, #10b981, transparent); }
  [data-color="rose"]   .m-bar { background: linear-gradient(90deg, #f43f5e, transparent); }
</style>