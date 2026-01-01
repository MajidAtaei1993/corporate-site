<template>
    <UiSection>
        <Reveal>
            <h2 class="section-title">Our Capabilities</h2>
            <p class="section-subtitle">
                NOXAI delivers cutting-edge AI solutions for modern businesses.
            </p>
        </Reveal>

        <div class="cards">
            <div v-for="(cap, i) in capabilities" :key="i" class="cap-card" ref="cards" :ref-for="true">

            <div class="image-wrapper">
            <img :src="cap.image" :alt="cap.title" />
            </div>

            <h3>{{ cap.title }}</h3>
            <p>{{ cap.text }}</p>
        </div>
        </div>
    </UiSection>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, nextTick } from 'vue'
import UiSection from '~~/app/components/ui/UiSection.vue'
import Reveal from '~~/app/components/ui/Reveal.vue'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import AiModeling from '~~/app/assets/images/capabilities/ai-modeling.png' 
import Realtime from '~~/app/assets/images/capabilities/realtime-insights.png' 
import Analytics from '~~/app/assets/images/capabilities/analytics-dashboard.png' 
import Secure from '~~/app/assets/images/capabilities/secure-scalable.png'

const capabilities = [
    {
        title: 'AI Modeling',
        text: 'Predictive and generative AI models.',
        image: AiModeling
    },
    {
        title: 'Real-time Insights',
        text: 'Instant actionable data for decisions.',
        image: Realtime
    },
    {
        title: 'Analytics Dashboard',
        text: 'Visualize KPIs and trends easily.',
        image: Analytics
    },
    {
        title: 'Secure & Scalable',
        text: 'Enterprise-grade performance and security.',
        image: Secure
    }
]

gsap.registerPlugin(ScrollTrigger)

const cards = ref<HTMLElement[]>([])

onMounted(async () => {
    await nextTick()
    console.log(cards.value.length)

    if (!cards.value.length) return

    gsap.from(cards.value, {
        opacity: 1,
        y: 60,
        scale: 0.85,
        stagger: 0.12,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: cards.value[0],
            start: 'top 80%'
        }
    })
})



</script>

<style scoped>
.section-title {
    font-size: 42px;
    font-weight: 700;
    text-align: center;
    color: var(--v-theme-primary);
}

.section-subtitle {
    font-size: 16px;
    text-align: center;
    color: var(--v-theme-secondary);
    margin-bottom: 60px;
}

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 40px;
}

.cap-card {
    background: var(--v-theme-surface);
    border: 1px solid var(--v-theme-border);
    border-radius: 22px;
    padding: 32px;
    text-align: center;
    transition: all 0.4s ease;
    cursor: pointer;
}

.cap-card:hover {
    transform: translateY(-12px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
}

.image-wrapper {
    height: 140px;
    margin-bottom: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-wrapper img {
    max-width: 140px;
    max-height: 140px;
    object-fit: contain;
    filter: grayscale(100%) contrast(1.1);
    opacity: 0.9;
    transition: all 0.4s ease;
}

.cap-card:hover img {
    filter: grayscale(0%) contrast(1.2);
    opacity: 1;
}

h3 {
    margin-bottom: 12px;
    font-size: 20px;
    color: var(--v-theme-primary);
}

p {
    font-size: 14px;
    line-height: 1.6;
    color: var(--v-theme-secondary);
}
</style>
