
<template>
  <div class="functionality">
    <form id="form-contact-search">
      <input v-model="searching" type="search" id="contact-search" placeholder="Search...">
    </form>

    <select v-model="selectedSortingOption" @change="handleSorting">
      <option v-for="(option, index) in sortingOptions" :key="index" :value="option.value">{{ option.message }}</option>
    </select>
  </div>


  <ul class="contacts">
    <li v-for="contact in sortedContacts" :key="contact.id">
      <div class="contact">
        <div class="name">
          <RouterLink :to="'contact/' + contact.id">
            <h2>{{ contact.nameFirst }} {{ contact.nameLast }}</h2>
          </RouterLink>
        </div>

        <div class="buttons">
          <Button btnClass="delete" @click="deleteContact(contact.id)" />
        </div>
      </div>
    </li>
  </ul>
</template>



<script>
import contactData from '@/contacts.json';
import Button from './Button.vue'

export default {
  components: {
    Button,
  },
  data() {
    return {
      contacts: [],
      selectedSortingOption: "nameLast",
      searching: "",
      sortingOptions: [
        {
          value: "nameFirst",
          message: "Sort by First Name",
        },
        {
          value: "nameLast",
          message: "Sort by Last Name",
        },
      ]
    }
  },
  async created() {
    if (localStorage.getItem('contacts')) {
      this.contacts = JSON.parse(localStorage.getItem('contacts'));
    } else {
      this.contacts = contactData.contacts;
      localStorage.setItem('contacts', JSON.stringify(this.contacts));
    }
  },
  computed: {
    sortedContacts() {
      let filteredContacts = this.contacts.slice();

      if (this.searching) {
        filteredContacts = filteredContacts.filter(contact => 
          contact.nameLast.toLowerCase().includes(this.searching.toLowerCase()) ||
          contact.nameFirst.toLowerCase().includes(this.searching.toLowerCase())
        )
      }

      if (this.selectedSortingOption === "nameLast") {
        return filteredContacts.sort((a, b) => a.nameLast.localeCompare(b.nameLast));
      } 
      else if (this.selectedSortingOption === "nameFirst"){
        return filteredContacts.sort((a, b) => a.nameFirst.localeCompare(b.nameFirst));
      }
      else {
        localStorage.setItem('selectedSortingOption', "nameLast");
        return filteredContacts.sort((a, b) => a.nameLast.localeCompare(b.nameLast));
      }
    }
  },
  methods: {
    async handleSorting() {
      localStorage.setItem('selectedSortingOption', this.selectedSortingOption);
    },
    deleteContact(id) {
      let index = this.contacts.findIndex(contact => contact.id == id);
      if (index !== -1) {
        this.contacts.splice(index, 1);
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
      }
    },
  },
  async mounted() {
    let selectedOption = localStorage.getItem('selectedSortingOption');
    if (selectedOption) {
      this.selectedSortingOption = selectedOption;
    }
  }
}
</script>

<style scoped>
  .functionality {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.00rem;
  }
</style>