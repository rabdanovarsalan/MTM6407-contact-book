<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  btnClass: String,
});

const iconClass = ref('');

const assignIconClass = () => {
  if (props.btnClass === 'edit') {
    iconClass.value = 'fa fa-edit';
  } else if (props.btnClass === 'delete') {
    iconClass.value = 'fa fa-trash-o';
  }
};

assignIconClass();
</script>

<template>
  <button :class="props.btnClass" @click="removeContactForm">
    <i :class="iconClass"></i>
  </button>
</template>
