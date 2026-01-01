<template>
  <div class="solutions-page">

    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg" />
      <div class="hero-content">
        <Reveal>
          <h1>AI Solutions that Power the Future</h1>
          <p>
            NOXAI transforms how the world’s most advanced companies operate,
            automate and scale.
          </p>
        </Reveal>
      </div>
    </section>

    <!-- SOLUTION GRID -->
    <UiSection>
      <div class="solution-grid">
        <Reveal v-for="(s,i) in solutions" :key="i">
          <div class="solution-card">
            <div class="icon">{{ s.icon }}</div>
            <h3>{{ s.title }}</h3>
            <p>{{ s.text }}</p>
          </div>
        </Reveal>
      </div>
    </UiSection>

    <!-- IMPACT STRIP -->
    <section class="impact">
      <div class="impact-grid">
        <div>
          <h2>10x</h2>
          <p>Decision speed</p>
        </div>
        <div>
          <h2>90%</h2>
          <p>Process automation</p>
        </div>
        <div>
          <h2>40%</h2>
          <p>Cost reduction</p>
        </div>
        <div>
          <h2>24/7</h2>
          <p>Autonomous operations</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import UiSection from '~~/app/components/ui/UiSection.vue'
import Reveal from '~~/app/components/ui/Reveal.vue'

const solutions = [
  {
    icon: '🏦',
    title: 'Financial Intelligence',
    text: 'AI-powered risk detection, fraud prevention and portfolio optimization.'
  },
  {
    icon: '🏭',
    title: 'Industrial Automation',
    text: 'Predictive maintenance, production optimization and digital twins.'
  },
  {
    icon: '🛒',
    title: 'Retail & Commerce',
    text: 'Dynamic pricing, demand forecasting and smart inventory systems.'
  },
  {
    icon: '🧬',
    title: 'Healthcare AI',
    text: 'Clinical decision support, diagnostics and patient outcome prediction.'
  },
  {
    icon: '🚚',
    title: 'Logistics & Supply Chain',
    text: 'Real-time route optimization, inventory intelligence and anomaly detection.'
  },
  {
    icon: '🔐',
    title: 'Cyber & Security',
    text: 'AI-driven threat detection, access intelligence and risk scoring.'
  }
]
</script>

<style scoped>
.solutions-page {
  overflow-x: hidden;
}

/* HERO */
.hero {
  position: relative;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 30%, #1b2a5e 0%, transparent 50%),
    radial-gradient(circle at 80% 60%, #0a5cff 0%, transparent 40%),
    linear-gradient(180deg, #05070d, #0b1020);
  filter: blur(0px);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
}

h1 {
  font-size: 72px;
  line-height: 1.05;
}

.hero p {
  margin-top: 24px;
  font-size: 22px;
  color: var(--nox-gray);
}

/* GRID */
.solution-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 50px;
  margin-top: 120px;
}

.solution-card {
  padding: 50px;
  border-radius: 30px;
  background: linear-gradient(135deg, #0c1222, #121c3a);
  border: 1px solid rgba(255,255,255,0.05);
  transition: transform .4s ease, box-shadow .4s ease;
}

.solution-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 40px 80px rgba(0,0,0,.4);
}

.icon {
  font-size: 42px;
  margin-bottom: 20px;
}

.solution-card h3 {
  font-size: 22px;
  margin-bottom: 12px;
}

.solution-card p {
  color: var(--nox-gray);
  line-height: 1.7;
}

/* IMPACT */
.impact {
  margin-top: 160px;
  padding: 140px 0;
  background: linear-gradient(180deg, #05070d, #0b1020);
}

.impact-grid {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 60px;
  text-align: center;
}

.impact h2 {
  font-size: 64px;
  color: var(--v-theme-primary);
}

.impact p {
  margin-top: 10px;
  color: var(--nox-gray);
}
</style>
