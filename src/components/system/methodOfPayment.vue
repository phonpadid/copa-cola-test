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
          Methods of Payment
        </h1>
      </a-form-item>
      <a-form-item label="Beneficiary">
        <a-input/>
      </a-form-item>
      <a-form-item label="Bank">
        <a-input/>
      </a-form-item>
      <a-form-item label="Currency (LAK)">
        <a-input/>
      </a-form-item>
      <a-form-item label="Currency (USD)">
        <a-input/>
      </a-form-item>
      <a-form-item label="Currency (THB)">
        <a-input/>
      </a-form-item>
      <a-form-item label=" ">
        <a-button className="bg-blue-500" type="primary">
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