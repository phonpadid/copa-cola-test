<template>
  <a-row :gutter="[16,16]">
    <a-col :sm="6" :md="6" :lg="6">
      <div class="w-full h-12 flex">
        <slot name="searchTable"></slot>
      </div>
    </a-col>
    <a-col :sm="6" :md="6" :lg="6">

    </a-col>
    <a-col :sm="6" :md="6" :lg="6">

    </a-col>
    <a-col :sm="6" :md="6" :lg="6">
      <div class="w-full h-12 flex justify-end">
        <slot name="actionButton"></slot>
      </div>
    </a-col>
  </a-row>
</template>

<script>
export default {
  name: "TableMenu"
}
</script>

<style scoped>

</style>