<script setup>
import Contact from './Contact.vue';
import contactData from '@/contacts.json';

const contacts = contactData.contacts;
</script>

<template>
  <ul class="contacts">
    <li class="contact" v-for="contact in contacts" :key="contact.id">
      <Contact />
    </li>
  </ul>
</template>

<style scoped>

</style>