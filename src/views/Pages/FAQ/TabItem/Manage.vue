<template>
  <div class="base-form">
    <a-form
        class="mt-16"
        :form="form"
        :ref='setRef'
        :model='form'
        :rules='rules'
        :label-col='labelCol'
        :wrapper-col='wrapperCol'>

      <a-form-item label="Question" name="title">
        <a-input v-model:value="form.title" size="large"/>
      </a-form-item>
      <a-form-item label="Answer" name="body">
        <a-textarea v-model:value="form.body" :rows="6"/>
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
import {useRoute,useRouter} from "vue-router";
import FAQ from "@/store/models/FAQ.js"
import {notificationSuccess} from "@/utils/message";

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
const form = reactive(new FAQ());
const loading = ref(false);
const setRef = el => {
  ruleForm.value = el
}
const onSubmit = () => {
  ruleForm.value
      .validate()
      .then((res) => {
        handleSubmit();
      })
      .catch(error => {
      })
}


function handleSubmit() {
  let uri;
  let method;
  uri = `post`;
  method = "post";
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
  loading.value = true;
  store.dispatch("data-resources/manage", body)
      .then((res) => {
        if (res.code === 200) {
          notificationSuccess({
            title: "Create Data Successfully",
            description: "data created !!",
            position: "topRight"
          })
          loading.value = false;
          router.push({
            name: "FAQ.index"
          }).catch(() => {

          })
        }
      })
      .catch((firstErrorBag) => {
        let error = firstErrorBag.items;
        loading.value = false
      }).finally(() => {
    loading.value = false;
  })
}

//validate form
const rules = {
  title: [NotEmpty('title')],
  body: [NotEmpty('body')],
};
</script>

<style scoped>
</style>