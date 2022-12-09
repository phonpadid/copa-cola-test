<template>
  <div class="base-table-main">
    <TableActionMenu>
      <template v-slot:searchTable>
        <a-input-search
            class="w-full text-xs"
            placeholder="input search text"
        />
      </template>
      <template v-slot:actionButton>
        <a-button class="bg-blue-500 font-light" type="primary" @click="onCreate">
          Create New
        </a-button>
      </template>
    </TableActionMenu>
  </div>
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
    name: "test.create"
  }).catch(() => {
  })
}
</script>

<style scoped>

</style>