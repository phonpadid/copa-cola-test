<template>
  <div class="w-full h-[600px] px-32 pt-10">
    <a-row :gutter="[16,16]">
      <a-col :sm="24" :md="24" :lg="24">
        <div class="w-full flex rounded justify-between  h-[260px] bg-blue-300">
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
      <a-col :sm="24" :md="8" :lg="8">
        <div class="w-full h-[300px]">
          <a-row :gutter="[16,16]">
            <a-col :sm="24" :md="12" :lg="12">
              <div class="w-full h-[120px] rounded bg-green-500">

              </div>
            </a-col>
            <a-col :sm="24" :md="12" :lg="12">
              <div class="w-full h-[120px] rounded bg-green-500">

              </div>
            </a-col>
            <a-col :sm="24" :md="24" :lg="24">
              <div class="w-full h-[120px] rounded bg-green-500">

              </div>
            </a-col>
          </a-row>
        </div>
      </a-col>
      <a-col :sm="24" :md="8" :lg="8">
        <div class="w-full h-[255px] rounded bg-green-500">

        </div>
      </a-col>
      <a-col :sm="24" :md="8" :lg="8">
        <a-row :gutter="[16,16]">
          <a-col :sm="24" :md="24" :lg="24">
            <div class="w-full h-[120px] bg-green-500">

            </div>
          </a-col>
          <a-col :sm="24" :md="24" :lg="24">
            <div class="w-full h-[120px] bg-green-500">

            </div>
          </a-col>
        </a-row>
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