<template>
  <div id="page-contact">
    <main class="container">
      <h1>{{ contact.nameFirst }} {{ contact.nameLast }}</h1>

      <ul class="contact-details">
        <li>Email: {{ contact.email }}</li>
        <li>Phone: {{ contact.phone }}</li>
      </ul>
    </main>

    <footer>
      <RouterLink to="/"><button>Back</button></RouterLink>  
      <button @click="editContact">Edit Contact</button>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      contact: null,
    };
  },
  created() {
    if (localStorage.getItem("contacts")) {
      const contacts = JSON.parse(localStorage.getItem("contacts"));
      this.contact = contacts.find((contact) => contact.id == this.id);
    } else {
      localStorage.setItem("contacts", JSON.stringify([]));
    }
  },
  methods: {
    editContact() {
      this.$router.push(`/edit/${this.id}`);
    },
  },
};
</script>

<style scoped>
  footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 0.5rem;
  }

  footer button {
    width: 6rem;
  }
</style>
