<script setup>
const handleSearch = (e) => {
  e.preventDefault();
  console.log(e.target);
  // const searchTerm = e.target.getElementById('contact-search').value.toUpperCase();
  // const searchList = contacts.filter(contact => contact.nameFirst.toUpperCase().includes)
}
</script>

<template>
  <form @submit="handleSearch">
    <input type="search" id="contact-search" placeholder="Search...">
    <button type="submit">Submit</button>
  </form>
</template>