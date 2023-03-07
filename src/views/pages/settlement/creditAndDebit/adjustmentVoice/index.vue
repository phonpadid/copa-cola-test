<template>
  <a-tabs class="base-table-main" v-model:activeKey="activeKey" :tab-click="changeTab(activeKey)">
    <a-tab-pane key="1" tab="Partner Info">
      <AdjustmentVoiceTable/>
    </a-tab-pane>
  </a-tabs>
</template>

<script setup>
import {ref} from "vue";
import {useRoute} from "vue-router"
import {useRouter} from "vue-router";
import AdjustmentVoiceTable
  from "@/views/pages/settlement/creditAndDebit/adjustmentVoice/TabItems/adjustmentVoiceTable.vue";

const route = useRoute();
const router = useRouter();
const tabActive = route.meta.tab;
const activeKey = ref(tabActive);

function changeTab(activeKey) {
  if (activeKey === 1) {
    router.push({
      name: "partner.index"
    }).catch(() => {
    })
  }
}
</script>

<style scoped lang="scss">
</style>
