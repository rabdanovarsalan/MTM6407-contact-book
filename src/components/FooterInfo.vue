<script setup>
  defineProps({
    name: String,
    year: Number,
  })
</script>

<template>
  <p class="footer-info">&copy;{{ year }}; {{ name }} </p>
</template>

<style scoped>

</style>