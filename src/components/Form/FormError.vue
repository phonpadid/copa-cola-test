<template>
  <div v-if="show" class="alert" :class="alertType">
    {{ message }}
  </div>
</template>

<script setup>
import { ref } from "vue";

const show = ref(false);
const message = ref("");
const alertType = ref("");

// Function to show the alert with a specific message and type
const showAlert = (message, type) => {
  show.value = true;
  message.value = message;
  alertType.value = type;
};

// Function to hide the alert
const hideAlert = () => {
  show.value = false;
};
</script>

<style scoped>
.alert {
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  font-weight: bold;
}

.error {
  background-color: #fdd;
  border: 1px solid #f00;
  color: #f00;
}

.success {
  background-color: #d3f7b6;
  border: 1px solid #4caf50;
  color: #4caf50;
}
</style>
