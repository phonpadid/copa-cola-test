<template>
  <div class="form-content">
    <!--        From Expert User-->
    <a-form
        v-bind="layout"
        ref="refForm"
    >
      <a-form-item label=" ">
        <h1 class="text-xl base-title-form">
          <span><i class="fal fa-edit"></i></span>
          Office Information
        </h1>
      </a-form-item>
      <a-form-item label="Office Name (Lao)">
        <a-input/>
      </a-form-item>
      <a-form-item label="Office Name (Eng)">
        <a-input/>
      </a-form-item>
      <a-form-item label="Address Lao 1 (Lao)">
        <a-input/>
      </a-form-item>
      <a-form-item label="Address Lao 2 (Lao)">
        <a-input/>
      </a-form-item>
      <a-form-item label="Address Eng 1 (Eng)">
        <a-input/>
      </a-form-item>
      <a-form-item label="Address Eng 2 (Eng)">
        <a-input/>
      </a-form-item>
      <a-form-item label="Tel">
        <a-input/>
      </a-form-item>
      <a-form-item label="Email">
        <a-input/>
      </a-form-item>
      <a-form-item label="FAX">
        <a-input/>
      </a-form-item>
      <a-form-item label=" ">
        <a-button class="bg-blue-500" type="primary">
          save change
        </a-button>
      </a-form-item>

    </a-form>
  </div>
</template>

<script setup>
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 10,
  },
};
</script>

<style scoped>

</style>