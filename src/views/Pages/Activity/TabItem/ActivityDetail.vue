<template>
  <div class="base-form flex justify-center items-center">
    <div class="w-[800px] min-h-[500px] px-16 pt-4 flex flex-col">
      <div
        @click="changeToMainEvent"
        class="w-full text-blue-600 mb-6 hover:cursor-pointer hover:text-blue-600 text-3xl"
      >
        <i class="far fa-long-arrow-left"></i>
        <span class="ml-2">Activity Detail</span>
      </div>
      <div class="w-full h-[300px] bg-gray-200">
        <img
          class="w-full h-full object-cover"
          v-if="activityDetail.image_logo"
          :src="activityDetail.image_logo.url"
          alt
        />
      </div>
      <h1 class="text-xl mt-4 font-bold">{{ activityDetail.name }}</h1>
      <div class="w-[100px] flex items-center justify-center mt-1 h-[20px] base-color-theme">
        <p class="m-0 p-0 text-xs text-white">01-Jan-2021</p>
      </div>
      <p class="text-sm mt-4">{{ activityDetail.description }}</p>
      <div class="w-full flex flex-col min-h-[80px] mt-4">
        <h1 class="text-xl font-bold">Joined</h1>
        <div class="w-full flex h-[40px] mt-4">
          <div class="w-[40px] mr-2 h-[40px] overflow-hidden rounded-full bg-gray-200">
            <img
              class="w-full h-full object-cover"
              v-if="activityDetail.image_logo"
              :src="activityDetail.image_logo.url"
              alt
            />
          </div>
          <div
            v-for="person in activityDetail.personals_active"
            :key="person"
            class="w-[40px] mr-2 h-[40px] overflow-hidden rounded-full bg-gray-200"
          >
            <img
              class="w-full h-full object-cover"
              v-if="person.image_profile"
              :src="person.image_profile.preview"
              alt
            />
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col min-h-[80px] mt-4">
        <h1 class="text-xl font-bold">Past Event</h1>
        <a-row>
          <a-col :sm="24" :md="8" :lg="8" v-for="item in activityDetail.posts">
            <CardEvent :event="item" />
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import bodyHelpers from "@/utils/BodyHelpers";
import { onMounted, ref } from "vue";

const router = useRouter();
const route = useRoute();
const store = useStore();
const activityDetail = ref({});

function fetchActivityDetail() {
  const id = route.params.activity_id;
  store
    .dispatch("data-resources/listing", {
      actionUri: `variable/${id}`,
      options_request: bodyHelpers([{ type: "activity" }])
    })
    .then(res => {
      if (res.code === 200) {
        activityDetail.value = res.data;
      }
    })
    .catch(error => {
      console.log(error);
    });
}

function changeToMainEvent() {
  router
    .push({
      name: "activity.index"
    })
    .catch(() => {});
}

onMounted(() => {
  fetchActivityDetail();
});
</script>

<style scoped>
</style>