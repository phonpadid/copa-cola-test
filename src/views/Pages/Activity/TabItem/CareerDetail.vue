<template>
  <div class="base-form flex justify-center items-center">
    <div class="w-[800px] min-h-[500px] px-16 pt-4 flex flex-col">
      <div @click="changeToMainEvent"
           class="w-full text-blue-600 mb-6 hover:cursor-pointer hover:text-blue-600  text-3xl">
        <i class="far fa-long-arrow-left"></i>
        <span class="ml-2">Career Detail</span>
      </div>
      <div class="w-[300px] flex items-center justify-center rounded-full overflow-hidden h-[300px] bg-gray-200">
        <img class="w-full h-full object-cover"
             v-if="careerDetail.image_logo"
             :src="careerDetail.image_logo.url"
             alt="">
      </div>
      <h1 class="text-xl mt-4 font-bold">{{careerDetail.name}}</h1>
      <p class="text-justify mt-4 text-base">{{careerDetail.description}}</p>
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
import {useRouter, useRoute} from "vue-router";
import {useStore} from "vuex";
import {onMounted, ref} from "vue";
import bodyHelpers from "@/utils/BodyHelpers";

const router = useRouter();
const route = useRoute();
const store = useStore();
const careerDetail = ref({})

function fetchCareerDetail() {
  const id = route.params.career_id;
  store.dispatch("data-resources/listing", {
    actionUri: `variable/${id}`,
    options_request: bodyHelpers([
      {type: "career"},
    ])
  }).then((res) => {
    if (res.code === 200) {
      careerDetail.value = res.data;
      console.log(careerDetail.value)
    }
  }).catch((error) => {
    console.log(error)
  })
}

function changeToMainEvent() {
  router.push({
    name: "activity.index"
  }).catch(() => {

  })
}

onMounted(() => {
  fetchCareerDetail();
})
</script>

<style scoped>

</style>