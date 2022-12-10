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
        <UploadImage @update:imageList="chooseImage" :title="'image'"/>
      </a-form-item>
      <a-form-item label="name" name="name">
        <a-input v-model:value="form.name" size="large"/>
      </a-form-item>
      <a-form-item label="description" name="description">
        <a-textarea v-model:value="form.description" :rows="6"/>
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
// import form  model
import Career from "@/store/models/Career.js";
import {notificationSuccess, notificationWarning} from "@/utils/message";

const store = useStore();
const route = useRoute();
const router = useRouter();
const loading = ref(false);
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
const form = reactive(new Career());
const setRef = el => {
  ruleForm.value = el
}

//emit image form component UploadImage and set to form
function chooseImage(image) {
  console.log(image[0].originFileObj, 5555)
  form.image_logo = image[0].originFileObj
}

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
  uri = `variable`;
  method = "post";
  const data = JSON.parse(JSON.stringify(form));
  data.image_logo = form.image_logo;
  if (!(form.image_logo instanceof File)) {
    delete data.image_logo
  }
  const body = {
    method: "post",
    _method: method,
    actionUri: uri,
    formData: true,
    ...data
  }
  console.log(body, "body")
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
            name: "activity.index"
          }).catch(() => {

          })
        }
      })
      .catch((firstErrorBag) => {
        let error = firstErrorBag.items;
        notificationWarning({
          title: "something went wrong",
          description: error
        })
        loading.value = false
      }).finally(() => {
    loading.value = false;
  })
}

//back to Career Page index
function backToCareer() {
  router.push({
    name: "career.index"
  }).catch(() => {

  })
}

const rules = {
  name: [NotEmpty('name')],
  description: [NotEmpty('description')],
};
</script>

<style scoped>
</style>