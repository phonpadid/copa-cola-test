<template>
  <div class="base-form">
    <div class="form-content">
      <!-- <AlertMessage v-if="isServerError" :messageError="messageError" /> -->
      <a-form v-bind="layout" :rules="rules" ref="refForm" :model="form">
        <a-form-item label=" ">
          <h1 class="text-xl base-title-form">
            <span><i class="fal fa-edit"></i></span>
            {{ isEdit === true ? "ແກ້ຂໍ້ມູນຜູ້ໃຊ້ລະບົບ" : "ເພີ່ມຂໍ້ມູນຜູ້ໃຊ້ລະບົບ" }}
          </h1>
        </a-form-item>
        <a-form-item label="ຊື່ຜູ້ໃຊ້ລະບົບ" name="name">
          <a-input v-model:value="form.name" />
        </a-form-item>
        <a-form-item label="ອີເມວ" name="email">
          <a-input type="email" v-model:value="form.email" />
        </a-form-item>
        <a-form-item label="ເບີໂທລະສັບ" name="phone">
          <a-input v-model:value="form.phone" />
        </a-form-item>
        <a-form-item label="ລະຫັດຜ່ານ" v-if="!isEdit" name="password">
          <a-input-password v-model:value="form.password" />
        </a-form-item>
        <a-form-item label="Is active">
          <a-checkbox v-model:checked="form.is_active">
            <P>{{ form.is_active ? "ເປີດ(ຈັດການຂໍ້ມູນທົ່ວໄປ)" : "ປິດ" }}</P>
          </a-checkbox>
        </a-form-item>
        <a-form-item label="Is staff">
          <a-checkbox v-model:checked="form.is_staff">
            <P>{{ form.is_staff ? "ເປີດ(ສາມາດຈັດການຜູ້ໃຊ້ໄດ້)" : "ປິດ" }}</P>
          </a-checkbox>
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
import { onMounted, ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import UserUseCase from "@/usecases/user/UserUseCase";

const checked = ref(true);

const route = useRoute();
const {
  layout,
  form,
  rules,
  refForm,
  isEdit,
  handleSubmit,
  messageError,
  isServerError,
  loadUser,
} = UserUseCase;

onBeforeMount(() => {
  isServerError.value = false;
});

onMounted(async () => {
  const id = route.params.id;
  if (id) {
    isEdit.value = true;
    await loadUser(id);
  }
});
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
