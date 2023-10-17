<template>
  <div class="base-form">
    <div class="form-content">
      <AlertMessage v-if="isServerError" :messageError="messageError" />
      <a-form v-bind="layout" :rules="rules" ref="refForm" :model="form">
        <a-form-item label=" ">
          <h1 class="text-xl base-title-form">
            <span><i class="fal fa-edit"></i></span>
            {{ isEdit === true ? "ແກ້ຂໍ້ມູນທີມ" : "ເພີ່ມຂໍ້ມູນທີມ" }}
          </h1>
        </a-form-item>
        <a-form-item label="ຊື່ທີມ" name="name">
          <a-input v-model:value="form.name" />
        </a-form-item>
        <a-form-item label="CODE" name="code">
          <a-input type="code" v-model:value="form.code" />
        </a-form-item>
        <!-- <a-form-item v-if="!isEdit" label="ຍືນຍັນລະຫັດຜ່ານ">
      <a-input-password v-model:value="form.password_confirmation"/>
    </a-form-item> -->
        <a-form-item label="">
          <a-button class="bg-blue-500 btn" type="primary" @click="handleSubmit">
            {{ isEdit === true ? "ແກ້ໄຂຂໍ້ມູນ" : "ບັນທຶກຂໍ້ມູນ" }}
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeMount, reactive } from "vue";
import { useRoute } from "vue-router";
// import ContactPersonalInformation from "@/components/system/contactPersonalInformation.vue";
import ManageTextUsecase from "@/usecases/manageText/manageTextUsecase";

const route = useRoute();
const {
  layout,
  form,
  rules,
  refForm,
  isEdit,
  handleSubmit,
  messageError,
  loadAllTeam,
  isServerError,
  loadTeam,
} = ManageTextUsecase;

onBeforeMount(() => {
  isServerError.value = false;
});

onMounted(async () => {
  const id = route.params.id;
  if (id) {
    isEdit.value = true;
    await loadTeam(id);
    loadAllTeam();
  }
});

// Varidate Form
</script>

<style scoped>
/* Base styles for larger screens */
.base-form {
  max-width: 600px;
  margin: 0 auto;
}

/* Responsive styles for smaller screens (e.g., tablets and mobile) */
@media screen and (max-width: 768px) {
  .base-form {
    max-width: 100%;
    padding: 20px; /* Add spacing for smaller screens */
  }

  /* Adjust the button margin for smaller screens */
  .btn {
    margin-left: 0; /* Reset the margin */
    margin-top: 20px; /* Add top margin for spacing */
  }
}

/* Styles for even smaller screens (e.g., mobile phones) */
@media screen and (max-width: 480px) {
  /* Further adjustments for smaller screens if needed */
}
</style>
