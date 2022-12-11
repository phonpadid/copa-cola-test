<template>
  <TableActionMenu>
    <template v-slot:searchTable>
      <a-input-search/>
    </template>
  </TableActionMenu>
  <a-row :gutter="[8,8]">
    <a-col :sm="24" :md="24" :lg="24">
      <a-table
          :columns="columns"
          :data-source="employee"
      >
      </a-table>
    </a-col>
  </a-row>
</template>

<script setup>
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import bodyHelpers from "@/utils/BodyHelpers";
import {useStore} from "vuex";

const router = useRouter();
const store = useStore();
const employee = ref([]);


const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Introduce Message',
    dataIndex: 'introduce_message',
  },
  {
    title: 'Work Year',
    dataIndex: 'work_year',
  },


];

function fetchEmployee() {
  store.dispatch("data-resources/listing", {
    actionUri: 'personal',
    options_request: bodyHelpers([
      {scope_recommend: "all"},
    ])
  }).then((res) => {
    if (res.code === 200) {
      employee.value = res.data;
      console.log(employee.value, 666)
    }
  }).catch((error) => {
    console.log(error)
  })
}

function onCreate() {
  router.push({
    name: "employee.create"
  }).catch(() => {
  })
}

onMounted(() => {
  fetchEmployee();
})
</script>
<style scoped>
</style>