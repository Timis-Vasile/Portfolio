<script>
  import { onMount } from 'svelte';
  import { base } from '$app/paths';

  export const prerender = true;

  let mounted = $state(false);
  onMount(() => { mounted = true; });

 const cards = [
    { href: '/chisono',  icon: '👤', title: 'Chi Sono',    sub: 'La mia storia e i miei interessi',         color: '#7c3aed' },
    { href: '/materie',  icon: '📚', title: 'Materie',     sub: 'Informatica, Reti, TPSI e molto altro',    color: '#06b6d4' },
    { href: '/progetti', icon: '💡', title: 'Progetti',    sub: 'Dalla terza alla quinta: i miei lavori',   color: '#f59e0b' },
    { href: '/civica',   icon: '⚖️', title: 'Ed. Civica', sub: 'Prigionia e Libertà — Anno V',             color: '#f43f5e' },
  ];
</script>

<svelte:head>
  <title>Portfolio Maturità</title>
</svelte:head>

<section class="hero" class:visible={mounted}>
  <div class="hero-glow"></div>
  <div class="hero-glow hero-glow-2"></div>

  <div class="hero-inner">
    <span class="badge fade-up">✦ Portfolio Digitale · Maturità 2026</span>

    <h1 class="hero-title fade-up delay-1">
      <span class="line1">Il mio</span>
      <span class="line2">Percorso</span>
    </h1>

    <p class="hero-sub fade-up delay-2">
      Cinque anni di studio, crescita e progetti —<br>
      raccontati attraverso questo portfolio digitale.
    </p>

    <div class="cards-grid fade-up delay-3">
      {#each cards as card, i}
        <a href="{base}{card.href}" class="hero-card" style="--c: {card.color}">
          <span class="hero-card-bar"></span>
          <span class="hero-card-icon">{card.icon}</span>
          <strong class="hero-card-title">{card.title}</strong>
          <span class="hero-card-sub">{card.sub}</span>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .hero {
    min-height: calc(100vh - 64px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    position: relative;
    overflow: hidden;
  }

  .hero-glow {
    position: absolute;
    width: 700px; height: 700px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 65%);
    top: 50%; left: 50%;
    transform: translate(-60%, -50%);
    pointer-events: none;
    animation: pulse 6s ease-in-out infinite alternate;
  }

  .hero-glow-2 {
    background: radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 65%);
    transform: translate(-35%, -55%);
    animation-delay: 3s;
    animation-direction: alternate-reverse;
  }

  @keyframes pulse {
    from { transform: translate(-60%, -50%) scale(1); }
    to   { transform: translate(-60%, -50%) scale(1.1); }
  }

  .hero-inner {
    position: relative;
    z-index: 1;
    max-width: 860px;
    width: 100%;
    text-align: center;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(124,58,237,0.12);
    border: 1px solid rgba(124,58,237,0.28);
    color: #c4b5fd;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 6px 16px;
    border-radius: 100px;
    margin-bottom: 2.5rem;
  }

  .hero-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(3.5rem, 10vw, 7rem);
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 0.95;
    margin-bottom: 1.5rem;
  }

  .line1 { display: block; color: #eeeeee; }

  .line2 {
    display: block;
    background: linear-gradient(135deg, #06b6d4 0%, #7c3aed 45%, #f43f5e 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-sub {
    color: #7777aa;
    font-size: 1.1rem;
    line-height: 1.65;
    margin-bottom: 3.5rem;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1rem;
  }

  .hero-card {
    position: relative;
    background: #13131a;
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 16px;
    padding: 1.75rem 1.5rem;
    text-align: left;
    overflow: hidden;
    transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .hero-card:hover {
    border-color: rgba(255,255,255,0.15);
    transform: translateY(-4px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px color-mix(in srgb, var(--c) 30%, transparent);
  }

  .hero-card-bar {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: var(--c);
    opacity: 0.7;
    border-radius: 0 0 16px 16px;
  }

  .hero-card-icon { font-size: 1.7rem; }

  .hero-card-title {
    font-family: 'Syne', sans-serif;
    font-size: 1.05rem;
    font-weight: 700;
    color: #eeeeee;
    display: block;
  }

  .hero-card-sub {
    font-size: 0.78rem;
    color: #7777aa;
    line-height: 1.4;
  }
</style>