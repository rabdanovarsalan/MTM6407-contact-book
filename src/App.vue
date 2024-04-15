<script setup>
import Navigation from '@/components/Navigation.vue';
import FooterInfo from '@/components/FooterInfo.vue';
import { RouterView } from 'vue-router';

const copyright = {
  year: 2024,
  name: "Arsalan Rabdanov",
}
</script>

<template>
  <header class="container">
    <Navigation />
  </header>

  <main class="container">
    <RouterView />
  </main>

  <footer class="container">
    <FooterInfo :year="copyright.year" :name="copyright.name"/>
  </footer>
</template>

<style scoped>

</style>
