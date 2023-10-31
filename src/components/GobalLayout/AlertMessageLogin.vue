<template>
    <a-alert class="mb-6" message="ກະລຸນາກວດສອບຂໍ້ມູນໃຫ້ຖືກຕ້ອງ" type="error" show-icon>
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
  