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
            Incoming Rate Tariff
          </h1>
        </a-form-item>

        <a-form-item label="TADIG">
          <a-input/>
        </a-form-item>
        <a-form-item label="CB_Version_ID">
          <a-input/>
        </a-form-item>
        <a-form-item label="CODE">
          <a-input/>
        </a-form-item>
        <a-form-item label="Name">
          <a-input/>
        </a-form-item>
        <a-form-item label="Description">
          <a-input/>
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
import officeUsecase from "@/usecases/officeUsecase";
import {onMounted} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const {
  layout,
  form,
  rules,
  refForm,
  isEdit,
} = officeUsecase;
onMounted(async () => {

})
</script>

<style scoped>

</style>