<template>
  <div id="page-add">
    <main class="container">
      <h1>Add New Contact</h1>

      <form @submit.prevent="handleSubmit" id="new-contact">
        <input v-model="nameFirst" type="text" placeholder="Enter First Name..."/>
        <input v-model="nameLast" type="text" placeholder="Enter Last Name..."/>
        <input v-model="email" type="email" placeholder="Enter Email..."/>
        <input v-model="phone" type="text" placeholder="Enter Phone Number..."/>
        <button type="submit">Submit</button>
      </form>
    </main>

    <footer>
      <RouterLink to="/">
        <button>Back Home</button>
      </RouterLink>      
    </footer>
  </div>
</template>

<script>
import contactData from '@/contacts.json';

export default {
  data() {
    return {
      contacts: [],
      nameFirst: '',
      nameLast: '',
      email: '',
      phone: '',
    }
  },
  created() {
    const data = localStorage.getItem('contacts');
    if (data) {
      this.contacts = JSON.parse(data);
    } else {
      this.contacts = contactData.contacts;
      localStorage.setItem('contacts', JSON.stringify(this.contacts));
    }
  },
  methods: {
    handleSubmit() {
      const newContact = {
        id: Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 1000),
        nameFirst: this.nameFirst,
        nameLast: this.nameLast,
        email: this.email,
        phone: this.formatPhone(this.phone)
      };

      this.contacts.push(newContact);
      localStorage.setItem('contacts', JSON.stringify(this.contacts));
      this.$router.push(`/contact/${newContact.id}`);
    },
    formatPhone(number) {
      const numberArray = number.toString().split('');
      
      if (numberArray.length === 10) {
        numberArray[0] = "(" + numberArray[0];
        numberArray[2] += ") ";
        numberArray[5] += "-"; 
        
        return numberArray.join('');
      }
    }
  }
}
</script>

<style scoped>
 #new-contact {
  display: flex;
  flex-direction: column;
  align-items: center;
 }

  button {
    width: 6rem;
  }
</style>
