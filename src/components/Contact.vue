<script setup>
import { defineProps } from 'vue';

defineProps({
  firstName: String,
  lastName: String,
});
</script>

<template>
  <div class="contact">
    <div class="name">
      <span>{{ lastName }}, {{ firstName }}</span>
    </div>

    <div class="buttons">
      <button class="edit"><i class="fa fa-edit"></i></button>
      <button class="delete"><i class="fa fa-trash-o"></i></button>
    </div>
  </div>
</template>

<style scoped>

</style>