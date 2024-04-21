<template>
  <div id="page-edit">
    <main class="container">
      <h1>Edit Contact</h1>
      <form @submit.prevent="handleSubmit" id="edit-contact">
        <input v-model="nameFirst" type="text" />
        <input v-model="nameLast" type="text" />
        <input v-model="email" type="email" />
        <input v-model="phone" type="text" />
        <button type="submit">Submit</button>
      </form>
    </main>

    <footer> 
      <RouterLink to="/"><button>Back</button></RouterLink>  
    </footer>    
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactId: this.$route.params.id,
      nameFirst: '',
      nameLast: '',
      email: '',
      phone: '',
      contacts: []
    }
  },
  async created() {
    if (localStorage.getItem('contacts')) {
      this.contacts = JSON.parse(localStorage.getItem('contacts'));
      const contact = this.contacts.find(contact => String(contact.id) === String(this.$route.params.id));
      if (contact) {
        this.nameFirst = contact.nameFirst;
        this.nameLast = contact.nameLast;
        this.email = contact.email;
        this.phone = contact.phone;
      }
    }
  },
  methods: {
    handleSubmit() {
      const updatedContact = {
        id: this.contactId,
        nameFirst: this.nameFirst,
        nameLast: this.nameLast,
        email: this.email,
        phone: this.phone
      };

      const index = this.contacts.findIndex(contact => String(contact.id) === String(this.$route.params.id));

      if (index !== -1) {
        this.contacts[index] = updatedContact;
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
      }

      this.$router.push(`/contact/${this.contactId}`);
    }
  }
}
</script>

<style scoped>
  #edit-contact {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    width: 6rem;
  }
</style>
