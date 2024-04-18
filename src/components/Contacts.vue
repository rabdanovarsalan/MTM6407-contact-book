<script>
import contactData from '@/contacts.json';
import Button from './Button.vue' // Button component used only for edit and delete buttons

export default {
  components: {
    Button,
  },
  data() {
    return {
      contacts: [],
      selectedSortingOption: "nameLast", // By default, contacts are sorted by Last Name
      searching: "", // Empty until there is input in searchbox. 
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
    // Retrieve contacts from local storage
    let data = localStorage.getItem('contacts');

    // If data present -> parse the JSON
    if (data) {
      this.contacts = JSON.parse(data);
    // If data empty -> get default contacts from contacts.json and save them in Local Storage
    } else {
      this.contacts = contactData.contacts;
      localStorage.setItem('contacts', JSON.stringify(this.contacts));
    }
  },
  computed: {
    sortedContacts() {
      let filteredContacts = this.contacts.slice();

      // Responsible for Search
      if (this.searching) {
        filteredContacts = filteredContacts.filter(contact => 
          contact.nameLast.toLowerCase().includes(this.searching.toLowerCase()) ||
          contact.nameFirst.toLowerCase().includes(this.searching.toLowerCase())
        )
      }

      // Responsible for Sorting
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
      // Selected Sorting option is saved in Local Storage
      localStorage.setItem('selectedSortingOption', this.selectedSortingOption);
    },
    deleteContact(id) {
      // Pressing Delete button deletes the associated Contact via id
      const index = this.contacts.findIndex(contact => contact.id == id);
      if (index !== -1) {
        // Remove the contact from the contacts array
        this.contacts.splice(index, 1);
        // Update Local Storage
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
      }
    },
  },
  async mounted() {
    // Retrieve selected sorting option from localStorage on component mount
    let selectedOption = localStorage.getItem('selectedSortingOption');
    if (selectedOption) {
      this.selectedSortingOption = selectedOption;
    }
  }
}
</script>

<template>
  <div>
    <form id="form-contact-search">
      <input v-model="searching" type="search" id="contact-search" placeholder="Search...">
    </form>

    <select v-model="selectedSortingOption" @change="handleSorting">
      <option v-for="(option, index) in sortingOptions" :key="index" :value="option.value">{{ option.message }}</option>
    </select>

    <ul class="contacts">
      <li v-for="contact in sortedContacts" :key="contact.id">
        <div class="contact">
          <div class="name">
            <RouterLink :to="contact.route">{{ contact.nameLast }}, {{ contact.nameFirst }}</RouterLink>
          </div>

          <div class="buttons">
            <Button btnClass="edit"/>
            <Button btnClass="delete" @click="deleteContact(contact.id)"/>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>