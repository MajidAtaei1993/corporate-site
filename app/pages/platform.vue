<template>
  <div class="platform-page">

    <!-- HERO -->
    <section class="hero">
      <img :src="controlCenter" class="hero-bg" />

      <div class="hero-overlay" />

      <div class="hero-content">
        <Reveal>
          <h1>The NOXAI Platform</h1>
          <p>One AI operating system for the world’s most advanced companies.</p>
        </Reveal>
      </div>
    </section>


    <!-- CORE SYSTEMS -->
    <UiSection>
      <div class="systems">
        <Reveal v-for="(sys,i) in systems" :key="i">
          <div class="system-card">
            <h3>{{ sys.title }}</h3>
            <p>{{ sys.text }}</p>
          </div>
        </Reveal>
      </div>
    </UiSection>

  </div>
</template>

<script setup lang="ts">
import UiSection from '~~/app/components/ui/UiSection.vue'
import Reveal from '~~/app/components/ui/Reveal.vue'
import controlCenter from '~~/app/assets/images/platform/control-center.png'

const systems = [
  { title:'AI Control Layer', text:'All intelligence flows through a unified AI brain.' },
  { title:'Live Data Fabric', text:'Streaming signals from every business system.' },
  { title:'Decision Engine', text:'Autonomous reasoning and forecasting.' },
  { title:'Execution Layer', text:'Automated actions across your enterprise.' }
]
</script>

<style scoped>
.platform-page { overflow-x:hidden }

.hero {
  perspective: 1200px;
  overflow: hidden;
}

.hero-bg {
  transform: scale(1.1);
  animation: slowZoom 18s ease-in-out infinite alternate;
  width: 100dvw;
  height: 100dvh;
  object-fit: cover;
}

@keyframes slowZoom {
  from { transform: scale(1.05) }
  to { transform: scale(1.15) }
}

.hero-content {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%,100% { transform: translateY(0) }
  50% { transform: translateY(-12px) }
}

.hero::after {
  content:'';
  position:absolute;
  inset:0;
  background:
    radial-gradient(circle at 50% 40%, rgba(80,140,255,.25), transparent 55%);
  mix-blend-mode: screen;
  pointer-events:none;
}

.hero-overlay {
  position:absolute;
  inset:0;
  background:linear-gradient(180deg, rgba(0,0,0,.6), rgba(0,0,0,.95));
}

.hero-content {
  position:relative;
  z-index:2;
  text-align:center;
  max-width:800px;
}

h1 {
  font-size:72px;
  line-height:1.1;
}

p {
  margin-top:20px;
  font-size:20px;
  color:var(--nox-gray);
}

.systems {
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
  gap:50px;
  margin-top:100px;
}

.system-card {
  padding:50px;
  border-radius:28px;
  background:linear-gradient(135deg,#0b0f1a,#121a2e);
  border:1px solid rgba(255,255,255,.05);
}
</style>
