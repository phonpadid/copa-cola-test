<template>
  <div class="base-form flex justify-center items-center">
    <div class="w-[800px] min-h-[500px] px-16 pt-4 flex flex-col">
      <div @click="changeToMainEvent"
           class="w-full text-blue-600 mb-6 hover:cursor-pointer hover:text-blue-600  text-3xl">
        <i class="far fa-long-arrow-left"></i>
        <span class="ml-2">Career Detail</span>
      </div>
      <div class="w-full h-[300px] bg-gray-200">
        <img class="w-full h-full object-cover"
             src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
             alt="">
      </div>
      <h1 class="text-xl mt-4 font-bold">Career Name</h1>
      <div class="w-[100px] flex items-center justify-center mt-1  h-[20px] base-color-theme">
        <p class="m-0 p-0 text-xs text-white">
          01-Jan-2021
        </p>
      </div>
      <p class="text-justify mt-4 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur
        commodi
        dolorem
        doloribus, harum iusto
        libero magni molestias mollitia necessitatibus possimus praesentium, quam, quibusdam sequi ullam ut veniam?
        Alias animi aut, eos hic ipsum libero molestias, mollitia nesciunt reprehenderit soluta tempora temporibus unde
        vitae. Dolores facilis itaque quo sequi, totam unde. Dolores esse id incidunt itaque! Ad animi atque consequatur
        consequuntur dolores, dolorum excepturi, fugiat illum impedit incidunt iste itaque iusto magnam nisi omnis quam
        repellat. Alias commodi dolores est, excepturi fugiat iusto odit quis repellendus saepe veritatis? A cupiditate
        earum incidunt nesciunt nulla quidem recusandae. Aut dolore iure natus.</p>
      <div class="w-full flex flex-col min-h-[80px] mt-4">
        <h1 class="text-xl font-bold">Joined</h1>
        <div class="w-full flex h-[40px] mt-4">
          <div class="w-[40px] mr-2 h-[40px] overflow-hidden rounded-full bg-gray-200">
            <img class="w-full   h-full object-cover"
                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                 alt="">
          </div>
          <div class="w-[40px] mr-2 h-[40px] overflow-hidden rounded-full bg-gray-200">
            <img class="w-full   h-full object-cover"
                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                 alt="">
          </div>
          <div class="w-[40px] mr-2 h-[40px] overflow-hidden rounded-full bg-gray-200">
            <img class="w-full   h-full object-cover"
                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                 alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter();

function changeToMainEvent() {
  router.push({
    name: "activity.index"
  }).catch(() => {

  })
}
</script>

<style scoped>

</style>