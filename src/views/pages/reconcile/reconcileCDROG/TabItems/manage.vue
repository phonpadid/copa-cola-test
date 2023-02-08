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
            Reconcile CDRs OG
          </h1>
        </a-form-item>

        <a-form-item label="File">
          <a-input></a-input>
        </a-form-item>
        <a-form-item label="Partner">
          <a-select/>
        </a-form-item>
        <a-form-item label="From Date">
          <a-date-picker class="w-full"/>
        </a-form-item>
        <a-form-item label="To Date">
          <a-date-picker class="w-full"/>
        </a-form-item>
        <a-form-item label="Report Type">
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
import ReconcileCDRICUseCase from "@/usecases/reconcileCDRICUseCase";
import {onMounted} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const {
  layout,
  form,
  rules,
  refForm,
  isEdit,
} = ReconcileCDRICUseCase;
onMounted(async () => {

})
</script>

<style scoped>

</style>