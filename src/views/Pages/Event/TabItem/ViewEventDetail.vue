<template>
  <div class="base-form flex justify-center items-center">
    <div class="w-[800px] min-h-[500px] px-16 pt-4 flex flex-col">
      <div
        class="w-full text-blue-600 font-black hover:cursor-pointer hover:text-blue-600 text-3xl"
      >
        <span @click="changeToMainEvent">
          <i class="far fa-long-arrow-left"></i>
          {{ post.type.toUpperCase() }}
        </span>
      </div>
      <h1 class="text-xl mt-4 font-bold break-words">{{ post.title }}</h1>
      <div class="w-[100px] flex items-center justify-center mt-1 h-[20px] base-color-theme">
        <p
          class="m-0 p-0 text-xs text-white"
        >{{moment(post.created_at).format("YYYY-MM-DD hh:mm:ss")}}</p>
      </div>
      <div class="w-full flex h-[40px] mt-4">
        <div
          class="w-[30px] mr-2 h-[30px] overflow-hidden rounded-full bg-gray-200"
          v-for="activity in post.activities"
          :key="activity"
        >
          <img
            v-if="activity.image_logo"
            class="w-full h-full object-cover"
            :src="activity.image_logo.preview"
            alt
          />
        </div>
      </div>

      <p class="text-justify mt-4 text-base break-words">{{post.body}}</p>
      <div class="w-full flex min-h-[80px] mt-4" v-if="post.type == 'event'">
        <i class="fas fa-calendar-alt"></i>
        <p class="ml-1 p-0 text-xs">{{moment(post.schedule).format("YYYY-MM-DD hh:mm:ss")}}</p>
      </div>

      <div class="w-full flex flex-col min-h-[80px] mt-4" v-if="post.personals.length >0">
        <h1 class="text-xl font-bold">Joined</h1>
        <div class="w-full flex h-[40px] mt-4">
          <div
            v-for="person in post.personals"
            :key="person.id"
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
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import moment from "moment";

const router = useRouter();
const route = useRoute();
const store = useStore();

const postId = route.query;
const post = ref({
  title: "",
  body: "",
  image_title: null,
  created_at: "",
  type: "",
  personals: []
});

async function fetchSinglePost() {
  console.log(postId, 88);
  if (postId.post_id) {
    try {
      const res = await store.dispatch("data-resources/listing", {
        actionUri: `post/${postId.post_id}`
      });
      post.value = res.data;
      console.log(post.value);
    } catch (error) {
      console.log(error);
    }
  }
}

onMounted(async () => await fetchSinglePost());

function changeToMainEvent() {
  router
    .push({
      name: "event.index"
    })
    .catch(() => {});
}
</script>

<style scoped>
</style>