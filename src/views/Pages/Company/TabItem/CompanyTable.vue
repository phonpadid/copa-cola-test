<template>
  <div>
    <a-form
        :form="companyInfo"
        :ref="setRef"
        :model="companyInfo"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
    >
      <a-form-item label=" ">
        <a-image :width="200" v-if="companyInfo.image_profile" :src="companyInfo.image_profile.preview"/>
        <UploadImage @update:imageList="chooseImage" :title="'image'"/>
      </a-form-item>
      <a-form-item label="Company Name" name="company_name">
        <a-input size="large" v-model:value="companyInfo.name"/>
      </a-form-item>
      <a-form-item label="Joinable Code" name="company_name">
        <a-input size="large" v-model:value="companyInfo.joinable_code"/>
      </a-form-item>
      <a-form-item label="Slogan" name="company_name">
        <a-input size="large" v-model:value="companyInfo.slogan"/>
      </a-form-item>
      <a-form-item label=" ">
        <div class="w-full h-[200px]">
          <img
              class="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt
          />
        </div>
      </a-form-item>
      <a-form-item label=" ">
        <upload-image :title="'gallery'"/>
      </a-form-item>
      <a-form-item label=" ">
        <a-button class="bg-blue-500" type="primary" @click="onSubmitInfo">save change</a-button>
      </a-form-item>

      <!--     content -->
      <a-form-item label=" ">
        <a-divider>Manage Post Content</a-divider>
        <div class="relative flex flex-col w-full min-h-[300px]">
          <a-button
              @click="onCreatePostContent"
              type="primary"
              shape="circle"
              class="absolute base-color-theme right-0"
          >
            <i class="fal fa-plus"></i>
          </a-button>
          <div class="w-full mt-10 h-[200px]">
            <img
                class="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt
            />
          </div>
          <h3 class="mt-2 font-bold">Title Post Content</h3>
          <p class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores
            blanditiis commodi
            consectetur culpa dolorum earum eos esse impedit ipsa iure molestiae non nostrum obcaecati provident saepe,
            sed temporibus?
          </p>
        </div>
      </a-form-item>
    </a-form>
    <ModalAddPostContent :visible="modalVisible" @change="(val) => modalVisible = val"/>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {NotEmpty} from "@/utils/validate";
import {useStore} from "vuex";
import {useRoute} from "vue-router";
import {notificationSuccess, notificationWarning} from "@/utils/message";

const store = useStore();
const route = useRoute();
const modalVisible = ref(false);
const labelCol = {
  xl: 4,
  md: 6,
  xs: 8
};
const wrapperCol = {
  xl: 12,
  md: 14,
  xs: 16
};
const ruleForm = ref(null);
const companyInfo = ref({
  image_profile: {preview: ""}
});
const loading = ref(false);

const setRef = el => {
  ruleForm.value = el;
};
const onSubmitInfo = () => {
  ruleForm.value
      .validate()
      .then(res => {
        handleSubmit();
      })
      .catch(error => {
      });
};

function handleSubmit() {
  let uri;
  let method;
  uri = "company";
  method = "post";
  const data = JSON.parse(JSON.stringify(companyInfo.value));
  data.image_profile = companyInfo.image_profile;
  if (!(companyInfo.image_profile instanceof File)) {
    delete data.image_profile;
  }
  console.log(companyInfo, 88);
  const body = {
    method: "post",
    _method: method,
    actionUri: uri,
    formData: true,
    ...data
  };
  finalSaveItem(body);
}

function finalSaveItem(body) {
  loading.value = true;
  store.dispatch("data-resources/manage", body)
      .then(res => {
        console.log(res);
        if (res.code === 200) {
          companyInfo.image_profile = null;
          notificationSuccess({
            title: "Create Data Successfully",
            description: "data created !!",
            position: "topRight"
          });
          loading.value = false;
          router
              .push({
                name: "company.index"
              })
              .catch(() => {
              });
        }
      })
      .catch(firstErrorBag => {
        // let error = firstErrorBag.items;
        // notificationWarning({
        //   title: "something went wrong",
        //   description: error
        // });
        loading.value = false;
      })
      .finally(() => {
        loading.value = false;
        fetchCompanyInfo();
      });
}

//emit image form component UploadImage and set to form
function chooseImage(image) {
  companyInfo.image_profile = image[0].originFileObj;
}

const rules = {
  name: [NotEmpty("name")]
};

function fetchCompanyInfo() {
  store
      .dispatch("data-resources/listing", {
        actionUri: "company"
      })
      .then(res => {
        if (res.code === 200) {
          companyInfo.value = res.data;
          console.log(companyInfo.value)
        }
      })
      .catch(error => {
        console.log(error);
      });
}

//create new post content with modal
function onCreatePostContent() {
  modalVisible.value = true;
}

onMounted(() => {
  fetchCompanyInfo();
})

</script>

<style scoped>
</style>