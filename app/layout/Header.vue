<template>
  <header class="nox-header">
    <div class="logo">NOXAI</div>

    <nav>
      <a>Platform</a>
      <a>Solutions</a>
      <a>Technology</a>
      <a>Company</a>
    </nav>

    <v-btn variant="outlined">Request Demo</v-btn>
  </header>
</template>

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

.logo {
  font-weight: 800;
  letter-spacing: 0.2em;
}
nav a {
  margin: 0 20px;
  color: var(--nox-gray);
  cursor: pointer;
}
</style>
