<template>
  <div class="technology-page">

    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg" />
      <div class="hero-content">
        <Reveal>
          <h1>Next-Gen AI Architecture</h1>
          <p>From data ingestion to autonomous intelligence, see how NOXAI powers enterprise AI.</p>
        </Reveal>
      </div>
    </section>

    <!-- TECH LAYERS -->
    <UiSection>
      <div class="tech-layers">
        <Reveal v-for="(layer,i) in layers" :key="i">
          <div class="layer-card">
            <h3>{{ layer.title }}</h3>
            <p>{{ layer.description }}</p>
          </div>
        </Reveal>
      </div>
    </UiSection>

    <!-- DATA FLOW -->
    <UiSection>
      <div class="data-flow">
        <Reveal v-for="(step,i) in dataFlow" :key="i">
          <div class="flow-step">
            <div class="icon">{{ step.icon }}</div>
            <h4>{{ step.title }}</h4>
            <p>{{ step.text }}</p>
          </div>
        </Reveal>
      </div>
    </UiSection>

  </div>
</template>

<script setup lang="ts">
import UiSection from '~~/app/components/ui/UiSection.vue'
import Reveal from '~~/app/components/ui/Reveal.vue'

const layers = [
  { title: 'Data Collection', description: 'Gathering structured and unstructured data from all sources.' },
  { title: 'Data Lake & Fabric', description: 'Centralized storage with live data streaming.' },
  { title: 'AI Control Layer', description: 'Unified intelligence brain for predictive & generative AI.' },
  { title: 'Execution Layer', description: 'Automated actions, alerts and enterprise workflows.' },
  { title: 'Security & Governance', description: 'End-to-end encryption and compliance monitoring.' }
]

const dataFlow = [
  { icon:'🗄️', title:'Ingest', text:'Collect raw data from multiple sources.' },
  { icon:'🧠', title:'Analyze', text:'Process and analyze using AI models.' },
  { icon:'⚡', title:'Predict', text:'Generate predictions and recommendations.' },
  { icon:'📤', title:'Act', text:'Trigger automated actions and insights.' }
]
</script>

<style scoped>
.technology-page { overflow-x:hidden; }

/* HERO */
.hero {
  position: relative;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero-bg {
  position:absolute;
  inset:0;
  background: radial-gradient(circle at 30% 30%, #1b2a5e 0%, transparent 50%), 
              radial-gradient(circle at 70% 70%, #0a5cff 0%, transparent 40%), 
              linear-gradient(180deg,#05070d,#0b1020);
  filter: blur(0px);
}

.hero-content { position:relative; z-index:2; max-width:900px; }

h1 { font-size:72px; line-height:1.05; }
.hero p { margin-top:24px; font-size:22px; color: var(--nox-gray); }

/* TECH LAYERS GRID */
.tech-layers {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 50px;
  margin-top:120px;
}

.layer-card {
  padding:50px;
  border-radius:28px;
  background: linear-gradient(135deg,#0c1222,#121c3a);
  border:1px solid rgba(255,255,255,0.05);
  transition: transform .4s ease, box-shadow .4s ease;
}

.layer-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 40px 80px rgba(0,0,0,.4);
}

.layer-card h3 { margin-bottom:12px; font-size:22px; }
.layer-card p { color: var(--nox-gray); line-height:1.7; }

/* DATA FLOW */
.data-flow {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
  gap: 50px;
  margin-top:100px;
}

.flow-step {
  text-align:center;
  padding:30px 20px;
  border-radius:22px;
  background:linear-gradient(135deg,#0b0f1a,#121a2e);
  border:1px solid rgba(255,255,255,0.05);
  transition: transform .4s ease, box-shadow .4s ease;
}

.flow-step:hover {
  transform: translateY(-8px);
  box-shadow:0 25px 50px rgba(0,0,0,.3);
}

.flow-step .icon { font-size:42px; margin-bottom:16px; }
.flow-step h4 { margin-bottom:12px; color:var(--v-theme-primary); }
.flow-step p { color: var(--nox-gray); font-size:14px; line-height:1.6; }
</style>
