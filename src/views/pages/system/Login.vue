<template>
  <!-- <AlertMessageLogin v-if="isServerError" :messageError="messageError" /> -->
  <div class="w-full h-screen flex justify-center bg-gray-100 items-center">
    <div class="w-[1200px] h-[600px] bg-white shadow">
      <a-row>
        <a-col :sm="24" :md="12" :lg="12">
          <div
            class="w-full h-[600px] bg-red-600 flex flex-col items-center justify-center"
          >
            <div class="w-[140px] h-[140px] bg-white rounded-full overflow-hidden">
              <img class="w-full h-full object-contain" :src="logo" alt="" />
            </div>
            <div class="text-center mt-6">
              <h1 class="text-xl text-white">COCA COLA</h1>
              <h2 class="text-base text-white">COPA COCA COLA</h2>
            </div>
          </div>
        </a-col>
        <a-col :sm="24" :md="12" :lg="12">
          <div class="w-full h-[600px] flex flex-col justify-center p-10">
            <h1 class="text-2xl mb-4">ເຂົ້າສູ່ລະບົບ</h1>
            <a-form :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }">
              <a-form-item
                ><label class="mx-2"
                  >ອີເມວ:
                  <i
                    class="fas fa-envelope"
                    style="font-size: 14px; margin-right: 8px"
                  ></i>
                </label>
                <a-input v-model:value="form.email" size="large" />
              </a-form-item>
              <a-form-item label="">
                <label class="mx-2"
                  >ລະຫັດຜ່ານ:
                  <i class="fas fa-lock" style="font-size: 14px; margin-right: 8px"></i>
                </label>
                <a-input-password v-model:value="form.password" size="large" />
              </a-form-item>
              <a-form-item>
                <a-button
                  :loading="isLoading"
                  type="primary"
                  size="large"
                  class="w-full bg-blue-500 text-white"
                  @click="login(form)"
                >
                  ເຂົ້າສູ່ລະບົບ
                  <span class="ml-4"><i class="far fa-long-arrow-right"></i></span>
                </a-button>
              </a-form-item>
            </a-form>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
import { useStore } from "vuex";
const store = useStore();
import { notificationSuccess, messageError } from "@/hooks/message";
import { reactive, ref, onBeforeMount } from "vue";
import UserModel from "@/store/models/User";
import logo from "@/assets/image/coca-cola-bottle-cap5138.logowik.com.webp";

const form = reactive(new UserModel());
const isLoading = ref(false);

async function login(form) {
  // Validate the form
  if (!form.email && !form.password) {
    messageError("ກະລຸນາປ້ອນອີເມວ ແລະ ລະຫັດຜ່ານກ່ອນ.");
    return;
  }
  if (!validateEmail(form.email)) {
    messageError("ກະລຸນາປ້ອນອີເມວໃຫ້ຖືກຕ້ອງ");
    return;
  }
  if (!validatePassword(form.password)) {
    messageError("ກະລຸນາປ້ອນລະຫັດຜ່ານໃຫ້ຖືກຕ້ອງ");
    return;
  }
  try {
    isLoading.value = true;
    await store.dispatch("auth/login", form).then((res) => {
      if (res) {
        notificationSuccess({
          title: "ເຂົ້າສູ່ລະບົບສຳເລັດ",
          description: "ເຂົ້າສູ່ລະບົບສຳເລັດ...",
          position: "topRight",
        });
        isLoading.value = false;
        router.push({
          name: "managetext.index",
        });
      }
    });
  } catch (e) {
    messageError("ກະລຸນາກວດສອບຂໍ້ມູນ....");
    isLoading.value = false;
  }
}

function validateEmail(email) {
  // Define your password criteria using regular expressions
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
  // Test if the password meets the criteria
  return emailRegex.test(email);
}
function validatePassword(password) {
  // Define your password criteria using regular expressions
  const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
  // Test if the password meets the criteria
  return passwordRegex.test(password);
}
</script>

<style scoped></style>
