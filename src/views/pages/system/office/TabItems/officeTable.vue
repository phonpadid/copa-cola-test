<template>
  <div class="base-menu-table">
    <!--    Table Action Header-->
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
    <!--    Table body-->
    <a-table
        :columns="columns"
        :data-source="data"
        :pagination="{ pageSize: 10 }">
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.dataIndex === 'action'">
          <a type="link">
            <EditOutlined/>
          </a>
          <div class="ant-divider ant-divider-vertical"></div>
          <a type="link">
            <DeleteOutlined/>
          </a>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script setup>
import {columns} from "@/tableColumns/officeColumn";
import {EditOutlined, DeleteOutlined} from "@ant-design/icons-vue";
import {useRouter} from "vue-router";
import officeUsecase from "@/usecases/officeUsecase";

const {
  onCreate
} = officeUsecase;

const router = useRouter();
const data = [...Array(100)].map((_, i) => ({
  key: i,
  index: `${i + 1}`,
  title: `xxxx xxxx xxxx`,
  description: `xxxx xxxx xxxxx`,
}));
</script>

<style scoped>

</style>