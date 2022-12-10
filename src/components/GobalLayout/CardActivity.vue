<template>
  <div class="w-full relative flex flex-col p-4 h-[200px] border-2 border-gray-200">
    <div class="flex justify-between relative">
      <div class="w-[80px] h-[80px]">
        <img class="w-full h-full object-cover"
             v-if="activity.image_logo"
             :src="activity.image_logo.url"
             alt="">
      </div>
      <div
          class="w-[100px] rounded-3xl text-white flex justify-center items-center absolute left-28 h-[20px] mt-8 base-color-theme">
        <p class="capitalize">{{ activity.type }}</p>
      </div>

      <div class="flex flex-col">
        <div
            class="w-[30px]  text-white cursor-pointer flex justify-center items-center h-[30px] bg-blue-500">
          <i class="far fa-pencil-alt"></i>
        </div>
        <div @click="viewActivity(activity.id)"
             class="w-[30px] mt-2 text-white cursor-pointer flex justify-center items-center h-[30px] bg-green-500">
          <i class="fal fa-eye"></i>
        </div>
        <div
            class="w-[30px] mt-2 text-white cursor-pointer flex justify-center items-center h-[30px] bg-red-500">
          <i class="fas fa-trash"></i>
        </div>
      </div>
    </div>
    <div class="mt-2">
      <h1 class="text-base font-bold text-gray-800">{{ activity.name }}</h1>
      <p class="text-sm">{{ activity.description }}</p>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter();
const props = defineProps({
  activity: Object,
})

function viewActivity(activity_id) {
  router.push({
    name: "activity.detail",
    params: {
      activity_id: activity_id
    }
  }).catch(() => {

  })
}
</script>

<style scoped>

</style>