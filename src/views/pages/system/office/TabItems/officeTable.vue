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
          <div class="table-action">
            <div class="action-item-table bg-gray-500" @click="onEdit(record.id)">
              <i class="far fa-pencil"></i>
            </div>
            <div class="action-item-table bg-red-500">
              <a-popconfirm
                  title="Are you sure delete this item?"
                  ok-text="Yes"
                  cancel-text="No"
                  @confirm="onDelete(record.id)"
              >
                <a href="#">
                  <i class="fas fa-trash-alt"></i>
                </a>
              </a-popconfirm>
            </div>
          </div>
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
  onCreate,
  onEdit,
  onDelete,
} = officeUsecase;

const router = useRouter();
const data = [...Array(100)].map((_, i) => ({
  key: i,
  index: `${i + 1}`,
  id: i + 1,
  title: `xxxx xxxx xxxx`,
  description: `xxxx xxxx xxxxx`,
}));
</script>

<style scoped>

</style>
