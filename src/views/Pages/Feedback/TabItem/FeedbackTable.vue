<template>
  <TableActionMenu>
    <template v-slot:searchTable>
      <a-input-search/>
    </template>
    <template v-slot:actionButton>
      <a-button type="primary" class="base-color-theme" @click="onCreate">
        create new
      </a-button>
    </template>
  </TableActionMenu>
  <a-row :gutter="[8,8]">
    <a-col :sm="24" :md="8" :lg="8" v-for="item in event">
      <CardEvent :event="item"/>
    </a-col>
  </a-row>
</template>

<script setup>
import {useRouter} from "vue-router";
import {useStore} from "vuex";
import bodyHelpers from "@/utils/BodyHelpers";
import {onMounted, ref} from "vue";

const store = useStore();
const router = useRouter();
const event = ref([]);

function fetchEvent() {
  store.dispatch("data-resources/listing", {
    actionUri: 'post',
    options_request: bodyHelpers([
      {type: "event"},
    ])
  }).then((res) => {
    if (res.code === 200) {
      event.value = res.data;
      console.log(event.value)
    }
  }).catch((error) => {
    console.log(error)
  })
}

function onCreate() {
  router.push({
    name: "event.create"
  }).catch(() => {
  })
}

onMounted(() => {
  fetchEvent();
})
</script>
<style scoped>
</style>