<template>
  <div class="w-full h-[600px]">
    <a-row :gutter="[8,8]">
      <a-col :sm="24" :md="24" lg="24">
        <div class="w-full flex rounded-2xl justify-between  h-[260px] bg-blue-300">
          <div class="flex flex-col">
            <div class="w-[600px]  px-16  flex   items-center h-[300px]">
              <div>
                <h1 class="text-3xl text-white font-black">Dashboard Analysis</h1>
                <p class="mt-4 text-white text-xl">Welcome to Joinable Dashboard</p>
              </div>
            </div>

          </div>
          <div class="w-[300px] h-[260px]">
            <img class="w-full h-full object-cover" :src="dashboardLogo" alt="">
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import dashboardLogo from "@/assets/image/dashboard.png";
import logo from "@/assets/image/JOINABLE.svg"
</script>

<style scoped>

</style>