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
        <h1 @click="backToActivity" class="text-2xl tracking-wide font-black cursor-pointer text-blue-600">
          <span><i class="far fa-long-arrow-left"></i></span> Activity
        </h1>
      </a-form-item>
      <a-form-item label=" ">
        <UploadImage :limit="1" @update:imageList="chooseImage" :title="'image'"/>
      </a-form-item>
      <a-form-item label="name" name="name">
        <a-input v-model:value="form.name" size="large"/>
      </a-form-item>
      <a-form-item label="description" name="description">
        <a-textarea v-model:value="form.description" :rows="6"/>
      </a-form-item>
      <a-form-item label=' '>
        <a-button :loading="loading" class="bg-blue-500" type='primary' @click="onSubmit">save change</a-button>
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
import Activity from "@/store/models/Activity";
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
const form = reactive(new Activity());
const loading = ref(false);
const setRef = el => {
  ruleForm.value = el
}
const rules = {
  name: [NotEmpty('name')],
  description: [NotEmpty('description')],
};
const onSubmit = () => {
  ruleForm.value
      .validate()
      .then((res) => {
        handleSubmit();
      })
      .catch(error => {
      })
}

//emit image form component UploadImage and set to form
function chooseImage(image) {
  form.image_logo = image[0].originFileObj
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
        loading.value = false
      }).finally(() => {
    loading.value = false;
  })
}

function backToActivity() {
  router.push({
    name: "activity.index"
  }).catch(() => {

  })
}
</script>

<style scoped>
</style>