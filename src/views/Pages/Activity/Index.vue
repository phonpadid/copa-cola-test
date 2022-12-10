<template>
  <a-tabs class="base-table-main" v-model:activeKey="activeKey" :tab-click="changeTab(activeKey)">
    <a-tab-pane key="1" tab="Activity">
      <ActivityTable/>
    </a-tab-pane>
    <a-tab-pane key="2" tab="Career">
      <CareerTable/>
    </a-tab-pane>
  </a-tabs>
</template>

<script setup>
import {ref} from "vue";
import {useRoute} from "vue-router"
import {useRouter} from "vue-router";
import ActivityTable from "@/views/Pages/Activity/TabItem/ActivityTable.vue";


const route = useRoute();
const router = useRouter();
// const tabActive = route.meta.tab;
const activeKey = ref("1");

function changeTab(activeKey) {
  if (activeKey === 1) {
    router.push({
      name: "activity.index"
    }).catch(() => {
    })
  } else {
    router.push({
      name: "career.index"
    }).catch(() => {
    })
  }
}
</script>

<style scoped lang="scss">
</style>