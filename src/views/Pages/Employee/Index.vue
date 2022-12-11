<template>
  <a-tabs class="base-table-main" v-model:activeKey="activeKey" :tab-click="changeTab(activeKey)">
    <a-tab-pane key="1" tab="Employee">
      <EmployeeTable/>
    </a-tab-pane>
  </a-tabs>
</template>

<script setup>
import {ref} from "vue";
import {useRoute} from "vue-router"
import {useRouter} from "vue-router";
import FAQTable from "@/views/Pages/FAQ/TabItem/FAQTable.vue";
import EmployeeTable from "@/views/Pages/Employee/TabItem/EmployeeTable.vue";


const route = useRoute();
const router = useRouter();
const tabActive = route.meta.tab;
const activeKey = ref(tabActive);

function changeTab(activeKey) {
  if (activeKey === 1) {
    router.push({
      name: "employee.index"
    }).catch(() => {
    })
  }
}
</script>

<style scoped lang="scss">
</style>