<template>
  <div class="container">
    <h2 class="font-bold text-5xl">COCA COLA</h2>
    <form action="" method="POST" @submit.prevent="login(form)">
      <div class="form-group">
        <label for="email">ອີເມວ:</label>
        <a-input v-model:value="form.email" />
      </div>
      <div class="form-group">
        <label for="password">ລະຫັດຜ່ານ:</label>
        <a-input v-model:value="form.password" type="password" />
      </div>
      <div class="form-group">
        <a-button :loading="isLoading" @click="login(form)" type="primary" block
          >Login</a-button
        >
      </div>
      <div class="message">
        <!-- {{ messageError }} -->
        <!-- Display error message here if login fails -->
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
import { useStore } from "vuex";
const store = useStore();
import { notificationSuccess, messageError } from "@/hooks/message";
import { reactive, ref } from "vue";
import UserModel from "@/store/models/User";

const form = reactive(
  new UserModel({
    form: {
      email: "test1@gmail.com",
      password: "passwd1234",
    },
  })
);

const isLoading = ref(false);

function login(form) {
  try {
    isLoading.value = true;
    store.dispatch("auth/login", form).then((res) => {
      if (res) {
        notificationSuccess({
          title: "ເຂົ້າສູ່ລະບົບສຳເລັດ",
          description: "ເຂົ້າສູ່ລະບົບສຳເລັດ...",
          position: "topRight",
        });
        isLoading.value = false;
        // alert.messageError("ເກີດຂໍ້ຜິດພາດ...");
        router.push({
          name: "managetext.index",
        });
      }
    });
  } catch (e) {
    // alert.messageError("ເກີດຂໍ້ຜິດພາດ...");
    messageError("ເກີດຂໍ້ຜິດພາດ...");
    isLoading.value = false;
  }
}
</script>

<style scoped>
.container {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 500px; /* Set a max-width for responsiveness */
  margin: 0 auto; /* Center the form horizontally */
  margin-top: 100px; /* Adjust margin-top as needed */
}

.container h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.form-group input[type="submit"] {
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
}

.form-group input[type="submit"]:hover {
  background-color: #0056b3;
}

.message {
  text-align: center;
  margin-top: 10px;
  color: #ff0000;
}
</style>
