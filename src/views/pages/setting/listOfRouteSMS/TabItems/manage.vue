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
            List of Route SMS
          </h1>
        </a-form-item>
        <a-form-item label="TADIG">
          <a-select/>
        </a-form-item>
        <a-form-item label="Route ID">
          <a-input/>
        </a-form-item>
        <a-form-item label="Switch ID">
          <a-input/>
        </a-form-item>
        <a-form-item label="Code">
          <a-input/>
        </a-form-item>
        <a-form-item label="Route Name">
          <a-input/>
        </a-form-item>
        <a-form-item label="Status">
          <a-select/>
        </a-form-item>
        <a-form-item label="Route Type">
          <a-select/>
        </a-form-item>
        <a-form-item label="PLMN ID">
          <a-input/>
        </a-form-item>
        <a-form-item label="Affect Date">
          <a-date-picker class="w-full" :placeholder="null"/>
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
import ListOfRouteVoiceUseCase from "@/usecases/listOfRouteVoiceUsecase";
import {onMounted} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const {
  layout,
  form,
  rules,
  refForm,
  isEdit,
} = ListOfRouteVoiceUseCase;
onMounted(async () => {

})
</script>

<style scoped>

</style>