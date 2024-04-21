<script setup>
import Contacts from '@/components/Contacts.vue';
</script>

<template>
  <main id="page-home" class="container">
    <h1>Contact Book</h1>
    <Contacts />
  </main>

  <footer>
    <RouterLink to="/add">
      <button>Add New Contact</button>
    </RouterLink>    
  </footer>
</template>

<style scoped>

</style>