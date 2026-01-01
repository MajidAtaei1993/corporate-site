<template>
  <div class="company-page">

    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg" />
      <div class="hero-content">
        <Reveal>
          <h1>About NOXAI</h1>
          <p>Building the future of AI for enterprise-scale impact.</p>
        </Reveal>
      </div>
    </section>

    <!-- MISSION / VISION / VALUES -->
    <UiSection>
      <div class="values-grid">
        <Reveal v-for="(item,i) in companyValues" :key="i">
          <div class="value-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </Reveal>
      </div>
    </UiSection>

    <!-- TEAM -->
    <UiSection>
      <h2 class="section-title">Our Leadership</h2>
      <div class="team-grid">
        <Reveal v-for="(member,i) in team" :key="i">
          <div class="team-card">
            <img :src="member.photo" :alt="member.name" />
            <h4>{{ member.name }}</h4>
            <p>{{ member.role }}</p>
          </div>
        </Reveal>
      </div>
    </UiSection>

  </div>
</template>

<script setup lang="ts">
import UiSection from '~~/app/components/ui/UiSection.vue'
import Reveal from '~~/app/components/ui/Reveal.vue'

// Mission / Vision / Values
const companyValues = [
  { title:'Mission', text:'Deliver enterprise AI solutions that transform business operations.' },
  { title:'Vision', text:'Empower organizations with autonomous, intelligent decision-making.' },
  { title:'Values', text:'Innovation, reliability, and ethical AI development.' }
]

// Team
import Member1 from '~~/app/assets/images/company/member1.png'
import Member2 from '~~/app/assets/images/company/member2.png'
import Member3 from '~~/app/assets/images/company/member3.png'

const team = [
  { name:'Alice Johnson', role:'CEO', photo: Member1 },
  { name:'Michael Lee', role:'CTO', photo: Member2 },
  { name:'Sofia Ramirez', role:'COO', photo: Member3 }
]
</script>

<style scoped>
.company-page { overflow-x:hidden; }

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
  background: linear-gradient(180deg,#05070d,#0b1020);
  filter: brightness(0.6);
}
.hero-content { position:relative; z-index:2; max-width:800px; }
h1 { font-size:64px; line-height:1.1; }
.hero p { margin-top:20px; font-size:20px; color: var(--nox-gray); }

/* VALUES GRID */
.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(240px,1fr));
  gap:40px;
  margin-top:80px;
}
.value-card {
  background: linear-gradient(135deg,#0b0f1a,#121a2e);
  padding:40px;
  border-radius:22px;
  border:1px solid rgba(255,255,255,0.05);
  text-align:center;
  transition: transform .3s ease, box-shadow .3s ease;
}
.value-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(0,0,0,.25);
}
.value-card h3 { margin-bottom:12px; }
.value-card p { color: var(--nox-gray); line-height:1.6; }

/* TEAM GRID */
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
  gap:40px;
  margin-top:60px;
  justify-items:center;
}
.team-card {
  background: linear-gradient(135deg,#0b0f1a,#121a2e);
  padding:30px;
  border-radius:20px;
  text-align:center;
  border:1px solid rgba(255,255,255,0.05);
  transition: transform .3s ease, box-shadow .3s ease;
}
.team-card:hover {
  transform: translateY(-6px);
  box-shadow:0 20px 40px rgba(0,0,0,.25);
}
.team-card img {
  width:120px;
  height:120px;
  border-radius:50%;
  object-fit:cover;
  margin-bottom:16px;
}
.team-card h4 { margin-bottom:8px; color:var(--v-theme-primary); }
.team-card p { color: var(--nox-gray); font-size:14px; }
</style>
