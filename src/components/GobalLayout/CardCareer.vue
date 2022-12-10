<template>
  <div class="w-full relative rounded flex flex-col p-4 h-[200px] border-2 border-gray-200">
    <div class="flex justify-between relative">
      <div class="w-[100px] h-[100px]" v-if="career.image_logo">
        <img class="w-full h-full object-cover"
             :src="career.image_logo.url"
             alt="">
      </div>
      <div class="w-[100px] h-[100px] bg-gray-200 rounded" v-else>
      </div>
      <div>
        <div class="flex justify-end">
          <div
              class="w-[30px] rounded-full mr-2  text-white cursor-pointer flex justify-center items-center h-[30px] bg-blue-500">
            <i class="far fa-pencil-alt"></i>
          </div>
          <div @click="viewCareer(career.id)"
               class="w-[30px] mr-2 rounded-full text-white cursor-pointer flex justify-center items-center h-[30px] bg-green-500">
            <i class="fal fa-eye"></i>
          </div>
          <div
              class="w-[30px] rounded-full  text-white cursor-pointer flex justify-center items-center h-[30px] bg-red-500">
            <i class="fas fa-trash"></i>
          </div>
        </div>
        <div
            class="w-[100px]  text-white capitalize h-[20px] bg-green-500 mt-4 flex justify-center items-center">
          <p class="text-xs"> {{ career.type }}</p>
        </div>
      </div>
    </div>
    <div class="mt-2">
      <h1 class="text-base font-bold text-gray-800">{{ career.name }}</h1>
      <p class="text-sm">{{ career.description }}</p>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";

const props = defineProps({
  career: {},
  type: String
})
const router = useRouter();

function viewCareer(career_id) {
  router.push({
    name: "career.detail",
    params: {
      career_id: career_id
    }
  }).catch(() => {

  })
}
</script>

<style scoped>

</style>