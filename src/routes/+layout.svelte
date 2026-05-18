<script>
  import '../app.css';
  import { page } from '$app/stores';
  import { base } from '$app/paths';

  export const prerender = true;

  let { children } = $props();

  let scrollProgress = $state(0);

  function handleScroll() {
    const el = document.documentElement;
    const scrollTop = el.scrollTop || document.body.scrollTop;
    const scrollHeight = el.scrollHeight - el.clientHeight;
    scrollProgress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  }

  // Rimosso lo slash prima del nome della pagina per far lavorare correttamente {base}
  const navItems = [
    { href: `${base}`,            label: '🏠 Home' },
    { href: `${base}/chisono`,   label: '👤 Chi Sono' },
    { href: `${base}/materie`,   label: '📚 Materie' },
    { href: `${base}/progetti`,  label: '💡 Progetti' },
    { href: `${base}/civica`,    label: '⚖️ Ed. Civica' },
  ];
</script>

<svelte:window onscroll={handleScroll} />

<div class="progress-bar" style="width: {scrollProgress}%"></div>

<nav class="main-nav">
  <a href="{base}/" class="nav-logo">Portfolio Maturità</a>
  <ul class="nav-links">
    {#each navItems as item}
      <li>
        <a href={item.href} class:active={$page.url.pathname === item.href || $page.url.pathname === item.href + '/'}>
          {item.label}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<main class="page-wrapper">
  {@render children()}
</main>

<footer class="main-footer">
  Portfolio Digitale · Esame di Stato 2025/2026 ·
</footer>