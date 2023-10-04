<template>
  <div class="base-menu-table">
    <!--    Table Action Header-->
    <TableActionMenu>
      <template v-slot:searchTable>
        <a-row class="mb-4">
          <a-col :sm="12" :md="8" :lg="8">
            <label>ຄົ້ນຫາຂໍ້ມູນ</label>
            <a-input-search class="w-full text-xs" placeholder="input search text" />
          </a-col>
          <a-col :sm="24" :md="2" :lg="2" class="ml-3">
            <a-button class="mt-5" type="primary" shape="circle">
              <i class="fas fa-search"></i>
            </a-button>
          </a-col>
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
      :data-source="matches"
      :pagination="{ pageSize: 10 }"
    >
      <template #bodyCell="{ column, text, record, index }">
        <!-- <pre>{{ record }}</pre> -->
        <template v-if="column.dataIndex === 'index'">
          {{ index + 1 }}
        </template>

        <template v-if="column.dataIndex === 'team_a'">
          {{ record.team_a.name }}
        </template>
        <template v-if="column.dataIndex === 'team_b'">
          {{ record.team_b.name }}
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
                title="ຕ້ອງການລົົົບບໍ່?"
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
import MatchUasecase from "@/usecases/match/matchUaseCase";
import { onMounted } from "vue";
import helpers from "@/hooks/helpers";

const { loadAllMatch, onCreate, onDelete, onEdit, matches } = MatchUasecase;
const columns = [
  {
    title: "ລຳດັບ",
    dataIndex: "index",
  },
  {
    title: "ຊື່ທີມA",
    dataIndex: "team_a",
  },
  {
    title: "ຊື່ທີມB",
    dataIndex: "team_b",
  },
  {
    title: "ເວລາແຂ່ງ",
    dataIndex: "match_time",
  },
  {
    title: "ເວລາສິ້ນສຸດການແຂ່ງ",
    dataIndex: "match_end_activity_time",
  },
  {
    title: "Is_enable",
    dataIndex: "is_enable",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];
onMounted(() => {
  loadAllMatch();
});
</script>

<style scoped></style>
