<template>
  <div class="base-form">

    <div class="form-content">
      <a-form
          v-bind="layout"
          :rules='rules'
          :model="form"
          ref="refForm"
      >
        <a-form-item label=" ">
          <h1 class="text-xl base-title-form">
            <span><i class="fal fa-edit"></i></span>
            User Information
          </h1>
        </a-form-item>
        <a-form-item label="UserName">
          <a-input/>
        </a-form-item>
        <a-form-item label="Password">
          <a-input-password/>
        </a-form-item>
        <a-form-item label="Confirm Password">
          <a-input-password/>
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
import OperatorUseCase from "@/usecases/operatorUsecase";
import {onMounted} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const {
  layout,
  form,
  rules,
  refForm,
  isEdit,
} = OperatorUseCase;
onMounted(async () => {

})
</script>

<style scoped>

</style>