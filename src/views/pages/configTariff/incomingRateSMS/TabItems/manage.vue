<template>
  <div class="base-form">

    <div class="form-content">
      <!--        From Expert User-->
      <a-form
          :rules='rules'
          :model="form"
          layout="vertical"
          ref="refForm"
      >
        <a-form-item label=" ">
          <h1 class="text-xl mb-5 base-title-form">
            <span><i class="fal fa-edit"></i></span>
            Incoming Rate SMS Tariff
          </h1>
        </a-form-item>
        <a-row :gutter="[16,16]">
          <a-col :sm="24" :md="8" :lg="8">
            <a-form-item label="ORG TADIG">
              <a-select/>
            </a-form-item>
          </a-col>
          <a-col :sm="24" :md="8" :lg="8">
            <a-form-item label="TRM TADIG">
              <a-select/>
            </a-form-item>
          </a-col>
          <a-col :sm="24" :md="8" :lg="8">
            <a-form-item label="CB_Version_ID">
              <a-input/>
            </a-form-item>
          </a-col>
          <a-col :sm="24" :md="8" :lg="8">
            <a-form-item label="ORG CODE">
              <a-input/>
            </a-form-item>
          </a-col>
          <a-col :sm="24" :md="8" :lg="8">
            <a-form-item label="name">
              <a-input/>
            </a-form-item>
          </a-col>
          <a-col :sm="24" :md="8" :lg="8">
            <a-form-item label="Currency">
              <a-select/>
            </a-form-item>
          </a-col>

          <a-col :sm="24" :md="6" :lg="6">
            <a-form-item label="Description">
              <a-input/>
            </a-form-item>
          </a-col>
          <a-col :sm="24" :md="6" :lg="6">
            <a-form-item label="Effect From">
              <a-date-picker class="w-full"/>
            </a-form-item>
          </a-col>
          <a-col :sm="24" :md="6" :lg="6">
            <a-form-item label="Effect Until">
              <a-date-picker class="w-full"/>
            </a-form-item>
          </a-col>
          <a-col :sm="24" :md="6" :lg="6">
            <div class="mt-9">
              <a-checkbox/>
              <span class="pl-2">Set Until</span>
            </div>
          </a-col>


          <a-col :sm="24" :md="8" :lg="8">
            <a-form-item label="PLMN ID">
              <a-input/>
            </a-form-item>
          </a-col>
          <a-col :sm="24" :md="8" :lg="8">
            <a-form-item label="Charge Band ID">
              <a-input/>
            </a-form-item>
          </a-col>
          <a-col :sm="24" :md="8" :lg="8">
            <a-form-item label="TRM PLMN ID">
              <a-input/>
            </a-form-item>
          </a-col>

          <a-col :sm="24" :md="4" :lg="4">
            <a-form-item label="Teir Mode">
              <a-select/>
            </a-form-item>
          </a-col>
          <a-col :sm="24" :md="4" :lg="4">
            <a-form-item label="Version NO">
              <a-select/>
            </a-form-item>
          </a-col>
          <a-col :sm="24" :md="4" :lg="4">
            <a-form-item label="Type">
              <a-select/>
            </a-form-item>
          </a-col>
          <a-col :sm="24" :md="6" :lg="6">
            <a-form-item label="Max Blocks">
              <a-input/>
            </a-form-item>
          </a-col>
          <a-col :sm="26" :md="6" :lg="6">
            <a-form-item label="Rate">
              <a-input/>
            </a-form-item>
          </a-col>
          <a-col :sm="24" :md="4" :lg="4">
            <a-form-item label=" ">
              <a-button class="bg-blue-500" type="primary">
                {{ isEdit ? "Update" : "Create" }}
              </a-button>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </div>
  </div>
</template>

<script setup>
import IncomingRateSMSUseCase from "@/usecases/incomingRateSMSUseCase";
import {onMounted} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const {
  layout,
  form,
  rules,
  refForm,
  isEdit,
} = IncomingRateSMSUseCase;
onMounted(async () => {

})
</script>

<style scoped lang="scss">
.ant-form-item {
  margin-bottom: 0;
}
</style>