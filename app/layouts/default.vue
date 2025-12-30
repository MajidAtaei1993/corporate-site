<script setup lang="ts">
import Header from '~/layout/Header.vue';

</script>

<template>
    <div>
        <Header />
        <main>
            <slot />
        </main>
    </div>
</template>
