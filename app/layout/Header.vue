<template>
  <header class="nox-header">
    <div class="logo">
      <NuxtLink to="/">NOXAI</NuxtLink>
    </div>

    <nav>
      <NuxtLink to="/platform">Platform</NuxtLink>
      <NuxtLink to="/solutions">Solutions</NuxtLink>
      <NuxtLink to="/technology">Technology</NuxtLink>
      <NuxtLink to="/company">Company</NuxtLink>
    </nav>

    <NuxtLink to="/request-demo">
      <v-btn variant="outlined">Request Demo</v-btn>
    </NuxtLink>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped>
.nox-header {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 92%;
  max-width: 1400px;
  padding: 14px 28px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: rgba(255,255,255,0.03);
  backdrop-filter: blur(20px);
  border: 1px solid var(--nox-border);
  border-radius: 20px;
  z-index: 100;
}

.logo a {
  font-weight: 800;
  letter-spacing: 0.2em;
  color: var(--nox-white);
  text-decoration: none;
}

nav a {
  margin: 0 20px;
  color: var(--nox-gray);
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease;
}

nav a:hover {
  color: var(--v-theme-primary);
}

v-btn {
  cursor: pointer;
}
nav a.router-link-active,
nav a.router-link-exact-active {
  color: var(--v-theme-primary);
  position: relative;
}

/* glowing underline */
nav a.router-link-active::after,
nav a.router-link-exact-active::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -10px;
  width: 60%;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--v-theme-primary),
    transparent
  );
  transform: translateX(-50%);
  box-shadow: 0 0 10px var(--v-theme-primary);
}

</style>
