<template>
  <div class="base-form">
    <a-form class="la-language"
            :form="form"
            :ref='setRef'
            :model='form'
            :rules='rules'
            :label-col='labelCol'
            :wrapper-col='wrapperCol'>
      <a-form-item label=' '>
        <upload-image :title="'Profile'"/>
      </a-form-item>
      <a-form-item label='Company Name' name='company_name'>
        <a-input v-model:value='form.name'/>
      </a-form-item>
      <a-form-item label='Slogan' name='company_name'>
        <a-input/>
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

const store = useStore();
const route = useRoute();
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
const rules = {
  name: [NotEmpty('name')],
};
</script>

<style scoped>
</style>