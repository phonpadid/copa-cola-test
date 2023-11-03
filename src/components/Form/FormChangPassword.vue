<template>
  <div class="base-form">
    <div class="form-content">
      <AlertMessage v-if="isServerError" :messageError="messageError" />
      <a-form v-bind="layout" :rules="rules" ref="refForm" :model="form">
        <a-form-item label="ລະຫັດຜ່ານເກົ່າ" name="old_password">
          <a-input-password v-model:value="form.old_password" />
        </a-form-item>
        <a-form-item v-if="!isEdit" label="ລະຫັດຜ່ານໃຫມ່" name="new_password">
          <a-input-password v-model:value="form.new_password" />
        </a-form-item>
        <a-form-item v-if="!isEdit" label="ຢືນຢັນລະຫັດຜ່ານໃຫມ່" name="confirm_password">
          <a-input-password v-model:value="form.confirm_password" />
        </a-form-item>
        <a-form-item label=" ">
          <a-button class="bg-blue-500 ml-3" type="primary" @click="handleSubmit">
            ບັນທຶກຂໍ້ມູນ
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";

const form = ref({
  old_password: "",
  new_password: "",
  confirm_password: "",
});

const isServerError = ref(false);
const messageError = ref("");

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const rules = {
  old_password: [
    { required: true, message: "Please enter your current password", trigger: "blur" },
  ],
  new_password: [
    { required: true, message: "Please enter a new password", trigger: "blur" },
  ],
  confirm_password: [
    { required: true, message: "Please confirm your new password", trigger: "blur" },
  ],
};

const isEdit = false; // Modify as needed

const validateData = () => {
  if (
    form.value.old_password === "" ||
    form.value.new_password === "" ||
    form.value.confirm_password === ""
  ) {
    isServerError.value = true;
    messageError.value = "Please fill in all fields.";
    return false;
  }
  if (form.value.new_password !== form.value.confirm_password) {
    isServerError.value = true;
    messageError.value = "New passwords do not match.";
    return false;
  }
  return true;
};

const showSuccessMessage = (message) => {
  // Display a success message using your notification component
  this.$notification.success(message);
};

const resetForm = () => {
  form.value.old_password = "";
  form.value.new_password = "";
  form.value.confirm_password = "";
  isServerError.value = false;
  messageError.value = "";
};

const handleSubmit = async () => {
  if (validateData()) {
    try {
      const response = await axios.post(
        "http://backend-production-c017.up.railway.app/api/account/password/change/",
        {
          old_password: form.value.old_password,
          new_password: form.value.new_password,
          confirm_password: form.value.confirm_password,
        }
      );

      if (response.status === 200) {
        // Password change was successful
        showSuccessMessage("Password changed successfully");
        resetForm();
      } else {
        // Handle other response status codes as needed
        isServerError.value = true;
        messageError.value =
          "Password change failed. Please check your current password.";
      }
    } catch (error) {
      // Handle network errors, e.g., unable to connect to the server
      isServerError.value = true;
      messageError.value = "An error occurred while processing your request.";
    }
  }
};
</script>
