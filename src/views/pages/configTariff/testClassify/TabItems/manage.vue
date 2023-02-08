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
            TestClassify
          </h1>
        </a-form-item>

        <a-form-item label="Start Date">
          <a-date-picker class="w-full"/>
        </a-form-item>
        <a-form-item label="Import Type">
          <a-select/>
        </a-form-item>
        <a-form-item label="Calling Number">
          <a-input/>
        </a-form-item>
        <a-form-item label="Called Number">
          <a-input/>
        </a-form-item>
        <a-form-item label="IC Route">
          <a-input/>
        </a-form-item>
        <a-form-item label="OG Route">
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