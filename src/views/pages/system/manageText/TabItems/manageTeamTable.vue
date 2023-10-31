<template>
  <div class="base-menu-table">
    <!--    Table Action Header-->
    <TableActionMenu>
      <template v-slot:searchTable>
        <a-row class="mb-4">
          <a-input-search
            placeholder="ຄົ້ນຫາ"
            enter-button
            @keypress.enter="onSearch"
            @search="onSearch"
            v-model:value="searchQuery"
          />
        </a-row>
      </template>
      <template v-slot:actionButton>
        <a-button class="bg-blue-500 font-light" type="primary" @click="onCreate">
          ເພີ່ມຂໍ້ມູນ
        </a-button>
      </template>
    </TableActionMenu>
    <!--    Table body-->
    <a-table
      class="base-table"
      :columns="columns"
      :data-source="teams"
      :pagination="{ pageSize: 10 }"
    >
      <pre>{{ teams }}</pre>
      <template #bodyCell="{ column, text, record, index }">
        <template v-if="column.dataIndex === 'index'">
          {{ index + 1 }}
        </template>
        <template v-if="column.dataIndex === 'created_at'">
          {{ helpers.dateFormat(text) }}
        </template>
        <template v-if="column.dataIndex === 'updated_at'">
          {{ helpers.dateFormat(text) }}
        </template>
        <template v-if="column.dataIndex === 'action'">
          <div class="table-action">
            <div class="action-item-table bg-gray-500" @click="onEdit(record.id)">
              <i class="far fa-pencil"></i>
            </div>
            <div class="action-item-table bg-red-500">
              <a-popconfirm
                title="ຕ້ອງການລົົົບຜູ້ໃຊ້ບໍ່?"
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
import ManageTextUsecase from "@/usecases/manageText/manageTextUsecase";
import { onMounted } from "vue";
import helpers from "@/hooks/helpers";
import { ref } from "vue";

import { message } from "ant-design-vue";

const { loadAllTeam, onCreate, onDelete, onEdit, teams } = ManageTextUsecase;
const searchQuery = ref("");
const searchCode = ref("");
const columns = [
  {
    title: "ລຳດັບ",
    dataIndex: "index",
  },
  {
    title: "ຊື່ທີມ",
    dataIndex: "name",
  },
  {
    title: "ລະຫັດທີມ",
    dataIndex: "code",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

// const onSearch = async (searchText) => {
//   try {
//     const response = await fetch(
//       `${API_URL}?name__icontains=${searchText}&code__icontains=${searchText}`
//     );
//     console.log(response);
//     if (!response.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     const data = await response.json();
//     teams.value = data.results;
//   } catch (error) {
//     message.error(`An error occurred: ${error.message}`);
//   }
// };

const onSearch = async () => {
  const filters = {
    name__icontains: searchQuery.value,
    code__icontains: searchCode.value,
  };
  loadAllTeam(filters);
};
onMounted(() => {
  onSearch();
});
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
}

.search-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 14px;
  outline: none;
}

.search-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
}

.search-button i {
  margin-right: 5px;
  font-size: 14px;
  cursor: pointer;
}
</style>
