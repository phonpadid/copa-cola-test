<template>
  <a-alert class="mb-6" message="ເກີດຂໍ້ຜິດພາດ" type="error" show-icon>
    <template #description>
      <!-- <p v-html="messageError"></p> -->
    </template>
  </a-alert>
</template>

<script setup>
const props = defineProps({
  messageError: {},
});

// watch(() => props.messageError, (value) => {
//   console.log(value)
// })
</script>

<style scoped></style>
