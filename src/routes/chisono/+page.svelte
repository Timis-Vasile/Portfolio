<script>

</script>

<svelte:head>
  <title>Chi Sono — Portfolio Maturità</title>
</svelte:head>

<div class="section">
  <span class="section-tag">// profilo personale</span>
  <h1 class="section-title fade-up"><span class="grad">Chi</span> Sono</h1>
  <div class="divider fade-up delay-1"></div>

  <div class="placeholder fade-up delay-1">
  </div>

  <div class="bio-card card fade-up delay-2">
    <p class="bio-text">
      Sono Vasile Timis, studente dell'indirizzo <strong>Informatica e Telecomunicazioni</strong>.
      In questi cinque anni ho sviluppato competenze tecniche solide — dalla programmazione
      alle reti — ma soprattutto ho imparato a <strong>risolvere problemi reali</strong>
      con strumenti digitali concreti.
    </p>
    <p class="bio-text" style="margin-top: 1rem; color: #7777aa; font-size: 0.88rem;">
    </p>
  </div>

  <div class="grid-info" style="margin: 1.5rem 0 2.5rem;">
    <div class="info-card fade-up delay-2">
      <div class="info-card-label">Scuola</div>
      <div class="info-card-value">Istituto Tecnico Tecnologico Edoardo Agnelli</div>
    </div>
    <div class="info-card fade-up delay-3">
      <div class="info-card-label">Indirizzo</div>
      <div class="info-card-value">Informatica e Telecomunicazioni</div>
    </div>
    <div class="info-card fade-up delay-3">
      <div class="info-card-label">Anno scolastico</div>
      <div class="info-card-value">2025/2026</div>
    </div>
    <div class="info-card fade-up delay-4">
      <div class="info-card-label">Città</div>
      <div class="info-card-value" style="color: #7777aa; font-style: italic;">Torino</div>
    </div>
  </div>

  <h2 class="sub-title fade-up delay-3">Competenze e interessi</h2>
  <div class="tag-row fade-up delay-4">
    <span class="tag tag-purple">💻 Programmazione</span>
    <span class="tag tag-cyan">🌐 Reti</span>
    <span class="tag tag-amber">🗄️ Database</span>
    <span class="tag tag-green">🔒 Cybersecurity</span>
    <span class="tag tag-rose">🤖 Intelligenza Artificiale</span>
    <span class="tag tag-purple">📡 Telecomunicazioni</span>
    <span class="tag tag-cyan">⚙️ Django / Back-end</span>
    <span class="tag tag-amber">🖥️ Front-end</span>
  </div>

  <div class="timeline-section fade-up delay-4" style="margin-top: 4rem;">
    <h2 class="sub-title">Il mio percorso scolastico</h2>
    <p style="color: #7777aa; font-size: 0.88rem; margin-bottom: 2rem;">Terza → Quinta superiore</p>

    <div class="timeline">
      <div class="tl-item">
        <div class="tl-dot" style="background: #7c3aed;"></div>
        <div class="tl-body">
          <div class="tl-year" style="color: #7c3aed;">2023 / 2024 · Terza Superiore</div>
          <div class="tl-title">Primi progetti di coding</div>
          <div class="tl-desc">Codice Fiscale in Informatica · La Mattanza in Italiano · Mafia nell'Edilizia in Storia</div>
        </div>
      </div>
      <div class="tl-item">
        <div class="tl-dot" style="background: #06b6d4;"></div>
        <div class="tl-body">
          <div class="tl-year" style="color: #06b6d4;">2024 / 2025 · Quarta Superiore</div>
          <div class="tl-title">Progetti più complessi</div>
          <div class="tl-desc">Quiz della Patente in Informatica</div>
        </div>
      </div>
      <div class="tl-item">
        <div class="tl-dot" style="background: #10b981;"></div>
        <div class="tl-body">
          <div class="tl-year" style="color: #10b981;">2025 / 2026 · Quinta Superiore</div>
          <div class="tl-title">Anno della maturità</div>
          <div class="tl-desc">· Progetto 1522 (Django) · Ed. Civica: Prigionia e Libertà · Roberto Saviano</div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .bio-card { margin-bottom: 1.5rem; }
  .bio-text { color: #aaaacc; line-height: 1.8; font-size: 1rem; }
  .bio-text strong { color: #eeeeee; }

  .sub-title {
    font-family: 'Syne', sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    letter-spacing: -0.02em;
  }

  .timeline { position: relative; padding-left: 2rem; }

  .timeline::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, #7c3aed, #06b6d4, #10b981);
    border-radius: 1px;
  }

  .tl-item {
    position: relative;
    padding-left: 1.75rem;
    margin-bottom: 2.25rem;
  }

  .tl-dot {
    position: absolute;
    left: -2rem;
    top: 5px;
    width: 12px; height: 12px;
    border-radius: 50%;
    border: 2px solid #0a0a0f;
    transform: translateX(calc(-50% + 1px));
  }

  .tl-year {
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 0.3rem;
  }

  .tl-title {
    font-family: 'Syne', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
  }

  .tl-desc { font-size: 0.85rem; color: #7777aa; line-height: 1.6; }
</style>