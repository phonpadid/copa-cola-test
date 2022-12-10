<template>
  <div class="w-full p-8 cursor-pointer flex flex-col h-[180px]  border-2 border-gray-200 rounded">
    <div class="w-full flex justify-between">
      <div>
        <h2 class="text-xl">Event Name</h2>
        <p>Description....</p>
      </div>
    </div>
    <div class="w-full flex absolute bottom-5">
      <div class="w-[30px] m-1 h-[30px] overflow-hidden rounded-full bg-gray-400">
        <img class="w-full h-full object-cover"
             src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
             alt="">
      </div>
      <div class="w-[30px] m-1 h-[30px] overflow-hidden rounded-full bg-gray-400">
        <img class="w-full h-full object-cover"
             src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
             alt="">
      </div>
      <div class="w-[30px] m-1 h-[30px] overflow-hidden rounded-full bg-gray-400">
        <img class="w-full h-full object-cover"
             src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
             alt="">
      </div>
    </div>
    <div class="absolute right-8 bottom-4">
      <span class="text-sm capitalize font-bold text-blue-600"  @click="viewEventDetail()"> view more <i class="far fa-long-arrow-right"></i></span>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter();

function viewEventDetail() {
  router.push({
    name: "event.detail"
  }).catch(() => {

  })
}

</script>

<style scoped>

</style>