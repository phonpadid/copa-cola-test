<template>
  <div class="w-full h-screen">
    <a-row>
      <a-col :sm="24" :md="16" :lg="16">
        <div class="w-full flex flex-col justify-center items-center h-screen bg-blue-400">
          <img class="w-[400px] h-[400px]" :src="loginIcon" alt="">
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
            <h2 class="base-title-1 ml-2 text-gray-600">Login To Joinable</h2>
          </div>
          <a-form class="pt-8"
                  :form="form"
                  :ref='setRef'
                  :model='form'
                  :rules='rules'
                  :wrapper-col='wrapperCol'>
            <a-form-item name='email'>
              <label for="email">Email</label>
              <a-input size="large"/>
            </a-form-item>
            <a-form-item name='password'>
              <label for="email">Password</label>
              <a-input size="large"/>
            </a-form-item>
            <a-form-item>
              <a-button size="large" type="primary" class="bg-blue-500 w-full">
                Register
              </a-button>
              <div class="w-full">
                <p @click="Register" class="text-base mt-4 cursor-pointer hover:text-blue-600 capitalize">create account
                  <span
                      class="font-light"><i
                      class="fas fa-long-arrow-alt-right"></i></span></p>
              </div>
            </a-form-item>
          </a-form>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import loginIcon from "@/assets/image/login.png";
import logoApp from "@/assets/image/JOINABLE.svg";
import {reactive, ref} from 'vue'
import {NotEmpty} from '@/utils/validate'
import {useStore} from "vuex";
import {useRoute, useRouter} from "vue-router";

const store = useStore();
const route = useRoute();
const router = useRouter();
const wrapperCol = {
  xl: 24,
  md: 24,
  xs: 24,
}
const ruleForm = ref(null);
const form = reactive({
  name: "",
});
const setRef = el => {
  ruleForm.value = el
}
const onSubmit = () => {
  ruleForm.value
      .validate()
      .then((res) => {
        console.log(res)
      })
      .catch(error => {
      })
}
const rules = {
  name: [NotEmpty('name')],
};

//change to register page if not account
function Register() {
  router.push({
    name: "register.index"
  }).catch(() => {

  })
}
</script>

<style scoped>

</style>