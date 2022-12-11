<template>
  <div class="w-full p-4 cursor-pointer flex flex-col h-[180px] border-2 border-gray-200 rounded">
    <div class="w-full flex flex-col justify-between">
      <h2 class="text-base font-bold text-gray-800 break-words">{{ subStringTitle(event.title) }}</h2>
      <p class="text-sm mt-2 text-justify break-words">{{ subStringContent(event.body) }}</p>
    </div>
    <div class="w-full flex absolute bottom-5">
      <div
        class="w-[30px] m-1 h-[30px] overflow-hidden rounded-full bg-gray-400"
        v-for="item in event.activities"
        :key="item.id"
      >
        <img
          class="w-full h-full object-cover"
          v-if="item.image_logo"
          :src="item.image_logo.url"
          alt
        />
      </div>
    </div>

    <div class="absolute right-8 bottom-4">
      <span
        class="text-sm capitalize font-bold text-orange-600"
        @click="viewEventDetail()"
        v-if="event.type == 'event'"
      >{{event.personals_count}} joined</span>
      <span class="text-sm capitalize font-bold text-blue-600" @click="viewEventDetail()">
        view more
        <i class="far fa-long-arrow-right"></i>
      </span>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  event: {}
});

function subStringTitle(text) {
  if (text) {
    return text.substring(0, 25) + "...";
  }
}

function subStringContent(text) {
  if (text) {
    return text.substring(0, 100) + "...";
  }
}

function viewEventDetail() {
  router
    .push({
      name: "event.detail"
    })
    .catch(() => {});
}
</script>

<style scoped>
</style>