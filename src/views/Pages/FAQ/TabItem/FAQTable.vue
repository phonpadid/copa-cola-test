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
    <a-col :sm="24" :md="8" :lg="8" v-for="item in 6">
      <CardFAQ/>
    </a-col>
  </a-row>
</template>

<script setup>
import {useRouter} from "vue-router";
import CardEvent from "@/components/GobalLayout/CardEvent.vue";

const router = useRouter();
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Action',
    dataIndex: 'Action',
  }
];
const data = [...Array(100)].map((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  age: 32,
  address: `London, Park Lane no. ${i}`,
}));

function onCreate() {
  router.push({
    name: "FAQ.create"
  }).catch(() => {
  })
}
</script>
<style scoped>
</style>