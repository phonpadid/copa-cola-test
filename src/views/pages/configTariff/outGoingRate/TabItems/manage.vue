<template>
  <div class="base-form">

    <div class="form-content">
      <!--        From Expert User-->
      <a-form
          v-bind="layout"
          :rules='rules'
          :model="form"
          ref="refForm"
      >
        <a-form-item label=" ">
          <h1 class="text-xl base-title-form">
            <span><i class="fal fa-edit"></i></span>
            Outgoing Rate Tariff
          </h1>
        </a-form-item>

        <a-form-item label="File Input">
          <a-upload >
            <a-button style="width: 300px !important;">
              <upload-outlined></upload-outlined>
              Upload
            </a-button>
          </a-upload>
        </a-form-item>
        <a-form-item label="Import Type">
          <a-select/>
        </a-form-item>
        <a-form-item label="Currency">
          <a-select/>
        </a-form-item>
        <a-form-item label="Partner">
          <a-select/>
        </a-form-item>

        <a-form-item label=" ">
          <a-button class="bg-blue-500" type="primary">
            {{ isEdit ? "Update" : "Create" }}
          </a-button>
        </a-form-item>

      </a-form>
    </div>
  </div>
</template>

<script setup>
import {onMounted} from "vue";
import {useRoute} from "vue-router";
import {UploadOutlined} from "@ant-design/icons-vue";
import OutGoingRateUseCase from "@/usecases/outGoingRateUseCase";

const route = useRoute();
const {
  layout,
  form,
  rules,
  refForm,
  isEdit,
} = OutGoingRateUseCase;
onMounted(async () => {

})
</script>

<style scoped>

</style>