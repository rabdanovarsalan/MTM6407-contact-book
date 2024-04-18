<script setup>
  import contactData from '@/contacts.json';
  import { RouterLink, useRoute } from 'vue-router';

  const route = useRoute();
  const id = parseInt(route.params.id);
  const contact = contactData.contacts.find(contact => contact.id == id);
</script>

<template>
  <h1>{{ contact.nameLast }}, {{ contact.nameFirst }}</h1>
  
  <RouterLink to="/">
    <button>Back</button>
  </RouterLink>

  <ul class="contact-details">
    <li>Email: {{ contact.email }}</li>
    <li>Phone: {{ contact.phone }}</li>
  </ul>

</template>

<style scope>
  .contact-details {
    margin-top: 1rem;
  }
</style>