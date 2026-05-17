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

  const navItems = [
    { href: '/',          label: '🏠 Home' },
    { href: '/chisono',   label: '👤 Chi Sono' },
    { href: '/materie',   label: '📚 Materie' },
    { href: '/progetti',  label: '💡 Progetti' },
    { href: '/civica',    label: '⚖️ Ed. Civica' },
  ];
</script>

<svelte:window onscroll={handleScroll} />

<div class="progress-bar" style="width: {scrollProgress}%"></div>

<nav class="main-nav">
  <a href="/" class="nav-logo">Portfolio Maturità</a>
  <ul class="nav-links">
    {#each navItems as item}
      <li>
        <a href={item.href} class:active={$page.url.pathname === item.href}>
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
