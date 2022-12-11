<template>
  <div class="w-full h-[600px] px-20 pt-10">
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
              <div class="w-full h-[120px] flex flex-col items-center justify-center rounded bg-green-100 shadow">
                <img
                    class="w-[80px]  transition-all  hover:rotate-1 duration-1000 hover:scale-110 hover:delay-800 h-[80px] object-cover"
                    :src="event" alt="">
                <p>Events</p>
              </div>
            </a-col>
            <a-col :sm="24" :md="12" :lg="12">
              <div class="w-full h-[120px] flex flex-col items-center justify-center rounded bg-blue-100 shadow">
                <img
                    class="w-[80px]  transition-all  hover:rotate-1 duration-1000 hover:scale-110 hover:delay-800 h-[80px] object-cover"
                    :src="faq" alt="">
                <p>FAQ</p>
              </div>
            </a-col>
            <a-col :sm="24" :md="24" :lg="24">
              <div class="w-full h-[120px] flex items-center justify-center rounded bg-orange-100">
                <img
                    class="w-[80px]  transition-all  hover:rotate-1 duration-1000 hover:scale-110 hover:delay-800 h-[80px] object-cover"
                    :src="feedback" alt="">
                <p>Feedback <span><i class="fas fa-long-arrow-right"></i></span></p>
              </div>
            </a-col>
          </a-row>
        </div>
      </a-col>
      <a-col :sm="24" :md="8" :lg="8">
        <div class="w-full h-[255px] rounded bg-black overflow-hidden relative">
          <img
              class="w-full h-full object-cover opacity-80 transition-all  hover:rotate-1 duration-1000 hover:scale-110 hover:delay-800"
              src="https://images.unsplash.com/photo-1568219557405-376e23e4f7cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt="">
          <div
              class="absolute transition-all  hover:rotate-1 duration-1000 hover:scale-110 hover:delay-800 cursor-pointer w-max top-1/2 left-1/3 text-2xl tracking-wide font-black text-white">
            Activity <span><i class="fas fa-long-arrow-right"></i></span>
          </div>
        </div>
      </a-col>
      <a-col :sm="24" :md="8" :lg="8">
        <a-row :gutter="[16,16]">
          <a-col :sm="24" :md="24" :lg="24">
            <div class="w-full h-[120px] flex items-center justify-evenly rounded bg-amber-100">
              <img
                  class="w-[100px]  transition-all  hover:rotate-1 duration-1000 hover:scale-110 hover:delay-800 h-[100px] object-cover"
                  :src="employee" alt="">
              <p>Employee <span><i class="fas fa-long-arrow-right"></i></span></p>
            </div>
          </a-col>
          <a-col :sm="24" :md="24" :lg="24">
            <div class="w-full h-[120px] flex items-center justify-center rounded bg-green-100">
              <img
                  class="w-[80px]  transition-all  hover:rotate-1 duration-1000 hover:scale-110 hover:delay-800 h-[80px] object-cover"
                  :src="feedback" alt="">
              <p>Feedback <span><i class="fas fa-long-arrow-right"></i></span></p>
            </div>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import dashboardLogo from "@/assets/image/dashboard.png";
import event from "@/assets/image/event.png";
import faq from "@/assets/image/faq2.png";
import feedback from "@/assets/image/faq.png";
import employee from "@/assets/image/employee.png"
</script>

<style scoped>

</style>