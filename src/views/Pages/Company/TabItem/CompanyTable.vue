<template>
  <TableActionMenu>
    <template v-slot:searchTable>
      <a-input-search/>
    </template>
    <template v-slot:actionButton>
      <a-button type="primary" class="base-color-them" @click="onCreate">
        create new
      </a-button>
    </template>
  </TableActionMenu>
  <a-table
      :columns="columns"
      :data-source="data"
      :pagination="{ pageSize: 50 }"
      :scroll="{ y: 300 }"
  >
    <template #bodyCell="{ column, text, record }">
      <template v-if="column.dataIndex === 'Action'">
        <a type="link">
          <i class="fad fa-pencil-alt"></i>
        </a>
        <div class="ant-divider ant-divider-vertical"></div>
        <a type="link">
          <i class="far fa-trash"></i>
        </a>
      </template>
    </template>
  </a-table>
</template>

<script setup>
import {useRouter} from "vue-router";

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
    name: "company.profile"
  }).catch(() => {
  })
}
</script>
<style scoped>
</style>