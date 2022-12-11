<template>
  <a-form-item
      :form="form"
      :ref='setRef'
      :model='form'
      :label-col='labelCol'
      :wrapper-col='wrapperCol'
  >
    <a-modal
        title="Post Content"
        :visible="modalVisible"
        :width="920"
        :footer="false"
        @cancel="setModalVisible(false)">
      <div class="w-full flex flex-col min-h-[300px]">
        <a-form-item>
          <UploadImage @update:imageList="chooseImage" :title="'image'"/>
        </a-form-item>
        <a-form-item>
          <label for="">Post Title</label>
          <a-input size="large" v-model:value="form.title"/>
        </a-form-item>
        <a-form-item>
          <label for="">Post Content</label>
          <QuillEditor v-model:content="form.body" contentType="text" theme="snow"/>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" :loading="loading" class="base-color-theme" @click="handleSubmit">
            save change
          </a-button>
        </a-form-item>
      </div>

    </a-modal>
  </a-form-item>
</template>

<script setup>
import {reactive, ref, watch} from 'vue'
import {useStore} from "vuex";
import {useRoute} from "vue-router";
import Content from "@/store/models/Content";
import {notificationSuccess, notificationWarning} from "@/utils/message";

const emit = defineEmits(['change', 'success']);
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
})


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
const modalVisible = ref(false);
const loading = ref(false);
const ruleForm = ref(null);
const form = reactive(new Content());
const setRef = el => {
  ruleForm.value = el
}

//emit image form component UploadImage and set to form
function chooseImage(image) {
  form.image_content = image[0].originFileObj;
}

function handleSubmit() {
  let uri;
  let method;
  uri = `company-content`;
  method = "post";
  const data = JSON.parse(JSON.stringify(form));
  data.image_content = form.image_content;
  if (!(form.image_content instanceof File)) {
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
          setModalVisible(false)
          emit("success");
          loading.value = false;
          router.push({
            name: "company.index"
          }).catch(() => {

          })
        }
      })
      .catch((firstErrorBag) => {
        notificationWarning({
          title: "Save failed",
          description: firstErrorBag.errors().join('\n'),
          position: "topRight"
        })
        loading.value = false
      }).finally(() => {
    loading.value = false;
    setModalVisible(false)
  })
}

function setModalVisible(isVisible) {
  modalVisible.value = isVisible;
  emit("change", isVisible);
}

watch(() => props.visible, (value) => {
      modalVisible.value = value;
    }, {deep: true}
);
</script>

<style scoped>

</style>