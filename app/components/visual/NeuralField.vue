<template>
  <canvas ref="canvas" class="neural" />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref<HTMLCanvasElement>()
let ctx: CanvasRenderingContext2D
let particles: any[] = []
let raf = 0

const COUNT = 90

class Particle {
  x = Math.random() * window.innerWidth
  y = Math.random() * window.innerHeight
  vx = (Math.random() - 0.5) * 0.3
  vy = (Math.random() - 0.5) * 0.3
  r = Math.random() * 1.5 + 0.5

  update() {
    this.x += this.vx
    this.y += this.vy

    if (this.x < 0 || this.x > window.innerWidth) this.vx *= -1
    if (this.y < 0 || this.y > window.innerHeight) this.vy *= -1
  }
}

onMounted(() => {
  const c = canvas.value!
  c.width = window.innerWidth
  c.height = window.innerHeight

  ctx = c.getContext('2d')!

  particles = Array.from({ length: COUNT }, () => new Particle())

  const animate = () => {
    ctx.clearRect(0, 0, c.width, c.height)

    particles.forEach(p => {
      p.update()
      ctx.fillStyle = 'rgba(255,255,255,0.7)'
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fill()
    })

    raf = requestAnimationFrame(animate)
  }

  animate()
})

onUnmounted(() => cancelAnimationFrame(raf))
</script>

<style scoped>
.neural {
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0.5;
}
</style>
