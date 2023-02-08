<template>
  <a-tabs class="base-table-main" v-model:activeKey="activeKey" :tab-click="changeTab(activeKey)">
    <a-tab-pane key="1" tab="Reconcile CDRs OG">
      <ReconcileCDROGTable/>
    </a-tab-pane>
  </a-tabs>
</template>

<script setup>
import {ref} from "vue";
import {useRoute} from "vue-router"
import {useRouter} from "vue-router";
import ReconcileCDROGTable from "@/views/pages/reconcile/reconcileCDROG/TabItems/reconcileCDROGTable.vue";

const route = useRoute();
const router = useRouter();
const tabActive = route.meta.tab;
const activeKey = ref(tabActive);

function changeTab(activeKey) {
  if (activeKey === 1) {
    router.push({
      name: "HURThreshold.index"
    }).catch(() => {
    })
  }
}
</script>

<style scoped lang="scss">
</style>