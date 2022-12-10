<template>
  <div class="w-full h-screen">
    <a-row>
      <a-col :sm="24" :md="16" :lg="16">
        <div class="w-full flex flex-col justify-center items-center h-screen bg-blue-400">
          <img class="w-[400px] h-[400px]" :src="registerIcon" alt="">
          <div class="w-full flex flex-col justify-center items-center">
            <h1 class="text-4xl m-0 p-0 font-black text-white">Welcome to Joinable !!</h1>
            <p class="mt-4 text-white text-2xl text-justify">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </a-col>
      <a-col :sm="24" :md="8" :lg="8">
        <div class="w-full h-screen flex flex-col justify-center shadow pl-8 pr-8">
          <div class="w-[300px] h-[100px]  text-4xl flex items-center justify-center">
            <img :src="logoApp" alt="">
          </div>
          <div class="w-full h-[40px] border-l-4 border-blue-700 flex mt-4 items-center">
            <h2 class="base-title-1 ml-2 text-gray-600">Register To Joinable</h2>
          </div>
          <a-form class="pt-8"
                  :form="form"
                  :ref='setRef'
                  :model='form'
                  :rules='rules'
                  :wrapper-col='wrapperCol'>
            <a-form-item name='email'>
              <label for="email">Email</label>
              <a-input v-model:value="form.email" size="large"/>
            </a-form-item>
            <a-form-item name='password'>
              <label for="email">Password</label>
              <a-input v-model:value="form.password" size="large"/>
            </a-form-item>
            <a-form-item name='password_confirmation'>
              <label for="email">Confirm Password</label>
              <a-input v-model:value="form.password_confirmation" size="large"/>
            </a-form-item>
            <a-form-item>
              <a-button :loading="loading" size="large" type="primary" class="bg-blue-500 w-full" @click="onSubmit">
                Register
              </a-button>
              <div class="text-center mt-4">
                <p @click="login" class="text-base">Already have an account ? <span
                    class="text-blue-500 cursor-pointer font-black">sign in</span>
                </p>
              </div>
            </a-form-item>
          </a-form>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import registerIcon from "@/assets/image/resgister.png";
import logoApp from "@/assets/image/JOINABLE.svg";
import {reactive, onMounted, ref} from 'vue'
import {NotEmpty} from '@/utils/validate'
import {useStore} from "vuex";
import {useRoute, useRouter} from "vue-router";
import register from "@/store/models/Register";
import {notificationSuccess} from "@/utils/message";

const store = useStore();
const isEdit = ref(false);
const isSaving = ref(false)
const route = useRoute();
const router = useRouter();
const wrapperCol = {
  xl: 24,
  md: 24,
  xs: 24,
}
const ruleForm = ref(null);
const loading = ref(false);
const form = reactive(new register());
const setRef = el => {
  ruleForm.value = el
}
//validate form
const rules = {
  email: [NotEmpty("email")],
  password: [NotEmpty('password')],
  password_confirmation: [NotEmpty('password_confirmation')],
};

//function area
const onSubmit = () => {
  ruleForm.value
      .validate()
      .then((res) => {
        if (res) {
          handleSubmit();
        }
      })
      .catch(error => {
      })
}

function handleSubmit() {
  let uri;
  let method;
  if (isEdit.value) {
    uri = `auth/register-company`;
    method = "put"
  } else {
    uri = "auth/register-company";
    method = "post";
  }
  const data = JSON.parse(JSON.stringify(form));
  const body = {
    method: "post",
    _method: method,
    actionUri: uri,
    formData: false,
    ...data
  }
  finalSaveItem(body);
}

function finalSaveItem(body) {
  if (isSaving.value) {
    return;
  }
  isSaving.value = true;
  loading.value = true;
  store.dispatch("data-resources/manage", body)
      .then((res) => {
        if (res.code === 200) {
          notificationSuccess({
            title: "Register Successfully",
            description: "Confirm Login !!",
            position: "topRight"
          })
          loading.value = false;
          router.push({
            name: "login.index"
          }).catch(() => {

          })
        }
      })
      .catch((firstErrorBag) => {
        let error = firstErrorBag.items;
        isSaving.value = false;
        loading.value = false
      }).finally(() => {
    loading.value = false;
  })
}

function login() {
  router.push({
    name: "login.index"
  }).catch(() => {

  })
}

onMounted(() => {
  let id = route.params.product_id;
  isEdit.value = !!id;
})
</script>

<style scoped>

</style>