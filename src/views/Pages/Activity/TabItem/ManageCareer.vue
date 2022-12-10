<template>
  <div class="base-form">
    <a-form
        class="mt-8"
        :form="form"
        :ref='setRef'
        :model='form'
        :rules='rules'
        :label-col='labelCol'
        :wrapper-col='wrapperCol'>
      <a-form-item>
        <h1 @click="backToCareer" class="text-2xl tracking-wide font-black cursor-pointer text-blue-600">
          <span><i class="far fa-long-arrow-left"></i></span> Career
        </h1>
      </a-form-item>
      <a-form-item label=" ">
        <UploadImage :title="'image'"/>
      </a-form-item>
      <a-form-item label="name">
        <a-input size="large"/>
      </a-form-item>
      <a-form-item label="description">
        <a-textarea :rows="6"/>
      </a-form-item>
      <a-form-item label=' '>
        <a-button class="bg-blue-500" type='primary' @click='onSubmit'>save change</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import {reactive, ref} from 'vue'
import {NotEmpty} from '@/utils/validate'
import {useStore} from "vuex";
import {useRoute} from "vue-router";
import {useRouter} from "vue-router";

const store = useStore();
const route = useRoute();
const router = useRouter();
const labelCol = {
  xl: 4,
  md: 6,
  xs: 8,
}
const wrapperCol = {
  xl: 12,
  md: 14,
  xs: 16,
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

function backToCareer() {
  router.push({
    name: "career.index"
  }).catch(() => {

  })
}

const rules = {
  name: [NotEmpty('name')],
};
</script>

<style scoped>
</style>