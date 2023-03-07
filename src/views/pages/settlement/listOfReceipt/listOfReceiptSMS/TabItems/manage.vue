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
            Partner Information
          </h1>
        </a-form-item>
        <a-form-item label="Partner Code">
          <a-input/>
        </a-form-item>
        <a-form-item label="Name">
          <a-input/>
        </a-form-item>
        <a-form-item label="Office">
          <a-input/>
        </a-form-item>
        <a-form-item label="Tel">
          <a-input/>
        </a-form-item>
        <a-form-item label="Fax">
          <a-input/>
        </a-form-item>
        <a-form-item label="Address">
          <a-textarea/>
        </a-form-item>
        <a-form-item label="Description">
          <a-textarea/>
        </a-form-item>
        <a-form-item label="Contact Name">
          <a-input/>
        </a-form-item>
        <a-form-item label="Email">
          <a-input/>
        </a-form-item>
        <a-form-item label="Mobile">
          <a-input/>
        </a-form-item>
        <a-form-item label="Cycle Type">
          <a-select/>
        </a-form-item>

        <a-form-item label="TIN">
          <a-textarea/>
        </a-form-item>
        <a-form-item label="Manager">
          <a-input/>
        </a-form-item>

        <a-form-item label="Due Date">
          <a-date-picker class="w-full" :placeholder="null"/>
        </a-form-item>

        <a-form-item label="Traffic Difference">
          <a-input/>
        </a-form-item>

        <a-form-item label="Volume Difference">
          <a-input/>
        </a-form-item>

        <a-form-item label="Partner Type">
          <a-select/>
        </a-form-item>

        <a-form-item label="PLMN ID">
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