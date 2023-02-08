<template>
  <a-tabs class="base-table-main">
    <a-tab-pane key="1" tab=" Office Information">
      <office-information/>
    </a-tab-pane>
    <a-tab-pane key="2" tab="Contact Person Information">
      <contact-personal-information/>
    </a-tab-pane>
    <a-tab-pane key="3" tab="Methods of Payment">
      <method-of-payment/>
    </a-tab-pane>
  </a-tabs>
</template>

<script setup>
import officeUsecase from "@/usecases/officeUsecase";
import {onMounted} from "vue";
import {useRoute} from "vue-router";
import ContactPersonalInformation from "@/components/system/contactPersonalInformation.vue";

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