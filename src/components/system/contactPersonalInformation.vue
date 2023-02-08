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
          Contact Person Information
        </h1>
      </a-form-item>
      <a-form-item label="Contact Name">
        <a-input/>
      </a-form-item>
      <a-form-item label="Mobile No">
        <a-input/>
      </a-form-item>
      <a-form-item label="Email">
        <a-input/>
      </a-form-item>
      <a-form-item label="Position">
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