<script setup>
import Navigation from '@/components/Navigation.vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="container">
    <Navigation />
  </header>

  <main class="container">
    <RouterView />
  </main>
</template>

<style scoped>

</style>
