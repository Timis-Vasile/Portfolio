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
  <a href="/Portfolio/" class="nav-logo" onclick={() => window.location.href='/Portfolio/'}>Portfolio Maturità</a>
  <ul class="nav-links">
    <li><a href="/Portfolio/" class:active={$page.url.pathname === '/Portfolio/' || $page.url.pathname === '/Portfolio'} onclick={() => window.location.href='/Portfolio/'}>🏠 Home</a></li>
    <li><a href="/Portfolio/chisono" class:active={$page.url.pathname === '/Portfolio/chisono'} onclick={() => window.location.href='/Portfolio/chisono'}>👤 Chi Sono</a></li>
    <li><a href="/Portfolio/materie" class:active={$page.url.pathname === '/Portfolio/materie'} onclick={() => window.location.href='/Portfolio/materie'}>📚 Materie</a></li>
    <li><a href="/Portfolio/progetti" class:active={$page.url.pathname === '/Portfolio/progetti'} onclick={() => window.location.href='/Portfolio/progetti'}>💡 Progetti</a></li>
    <li><a href="/Portfolio/civica" class:active={$page.url.pathname === '/Portfolio/civica'} onclick={() => window.location.href='/Portfolio/civica'}>⚖️ Ed. Civica</a></li>
  </ul>
</nav>

<main class="page-wrapper">
  {@render children()}
</main>

<footer class="main-footer">
  Portfolio Digitale · Esame di Stato 2025/2026 ·
</footer>