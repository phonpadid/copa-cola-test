<template>
  <div class="w-full h-[600px]">
    <a-row :gutter="[8,8]">
      <a-col :sm="24" :md="24" lg="24">
        <div class="w-full flex rounded-2xl justify-between  h-[280px] bg-blue-200">
          <div>

          </div>
          <div class="w-[300px] h-[300px]">
            <img class="w-full h-full object-cover" :src="dashboardLogo" alt="">
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import dashboardLogo from "@/assets/image/dashboard.png"
</script>

<style scoped>

</style>