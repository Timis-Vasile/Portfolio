<script>
  import '../app.css';
  import { page } from '$app/stores';

  let { children } = $props();

  let scrollProgress = $state(0);

  function handleScroll() {
    const el = document.documentElement;
    const scrollTop = el.scrollTop || document.body.scrollTop;
    const scrollHeight = el.scrollHeight - el.clientHeight;
    scrollProgress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  }
</script>

<svelte:window onscroll={handleScroll} />

<div class="progress-bar" style="width: {scrollProgress}%"></div>

<nav class="main-nav">
  <a href="/Portfolio/" class="nav-logo" data-sveltekit-reload>Portfolio Maturità</a>
  <ul class="nav-links">
    <li><a href="/Portfolio/" data-sveltekit-reload class:active={$page.url.pathname === '/Portfolio/' || $page.url.pathname === '/Portfolio'}>🏠 Home</a></li>
    <li><a href="/Portfolio/chisono" data-sveltekit-reload class:active={$page.url.pathname === '/Portfolio/chisono'}>👤 Chi Sono</a></li>
    <li><a href="/Portfolio/materie" data-sveltekit-reload class:active={$page.url.pathname === '/Portfolio/materie'}>📚 Materie</a></li>
    <li><a href="/Portfolio/progetti" data-sveltekit-reload class:active={$page.url.pathname === '/Portfolio/progetti'}>💡 Progetti</a></li>
    <li><a href="/Portfolio/civica" data-sveltekit-reload class:active={$page.url.pathname === '/Portfolio/civica'}>⚖️ Ed. Civica</a></li>
  </ul>
</nav>

<main class="page-wrapper">
  {@render children()}
</main>

<footer class="main-footer">
  Portfolio Digitale · Esame di Stato 2025/2026 ·
</footer>