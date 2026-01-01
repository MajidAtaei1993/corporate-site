<template>
    <v-app>
        <Header />

        <v-main>
            <NuxtPage />
        </v-main>

        <Footer />
    </v-app>
</template>

<script setup lang="ts">
import Header from '~~/app/layout/Header.vue'
import Footer from '~~/app/layout/Footer.vue'
</script>
