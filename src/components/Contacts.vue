<script setup>
import Contact from './Contact.vue';
import SearchBar from './SearchBar.vue';
import contactData from '@/contacts.json';
import { ref } from 'vue';

const contacts = ref(contactData.contacts);

const sortingOptions = [
  {
    value: "nameLast",
    message: "Sort by Last Name",
  },
  {
    value: "nameFirst",
    message: "Sort by First Name",
  },
]

const sortContactsByLastName = () => {
  contacts.sort((a, b) => {
    if (a.nameLast.toUpperCase() < b.nameLast.toUpperCase()) {
      return -1;
    } else if (a.nameLast.toUpperCase() > b.nameLast.toUpperCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

const sortContactsByFirstName = () => {
  contacts.sort((a, b) => {
    if (a.nameFirst.toUpperCase() < b.nameFirst.toUpperCase()) {
      return -1;
    } else if (a.nameFirst.toUpperCase() > b.nameFirst.toUpperCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

const handleSorting = () => {
  if (selectedSortingOption.value === "nameLast") {
    sortContactsByLastName();
  } else if (selectedSortingOption.value === "nameFirst") {
    sortContactsByFirstName();
  }
}

</script>

<template>
  <SearchBar />
  <select v-model="sortingOptions" @submit="handleSorting">
    <option v-for="(sortingOption, index) in sortingOptions" :key="index" :value="sortingOption.value">{{sortingOption.message}}</option>
  </select>

  <ul class="contacts">
    <li v-for="contact in contacts" :key="contact.id">
      <Contact :firstName="contact.nameFirst" :lastName="contact.nameLast"/>
    </li>
  </ul>
</template>

<style scoped>
/* Your scoped styles */
</style>
