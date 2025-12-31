<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="brand">NOXAI</div>
      <nav class="footer-nav">
        <a>Platform</a>
        <a>Solutions</a>
        <a>Technology</a>
        <a>Company</a>
        <a>Careers</a>
      </nav>
      <div class="socials">
        <a>LinkedIn</a>
        <a>Twitter</a>
        <a>GitHub</a>
      </div>
    </div>
    <p class="copyright">© {{ new Date().getFullYear() }} NOXAI. All rights reserved.</p>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.footer { background: var(--nox-bg); color: var(--nox-gray); padding: 60px 20px 40px; text-align: center; }
.footer-content { display: flex; flex-direction: column; gap: 24px; align-items: center; margin-bottom: 24px; }
.footer .brand { font-size: 24px; font-weight: 800; }
.footer-nav a, .socials a { margin: 0 12px; cursor: pointer; transition: color 0.2s ease; }
.footer-nav a:hover, .socials a:hover { color: var(--nox-white); }
.socials { display: flex; }
p { font-size: 14px; color: var(--nox-muted); }
</style>
