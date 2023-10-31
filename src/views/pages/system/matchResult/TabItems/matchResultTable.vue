<template>
  <div class="base-menu-table">
    <!--    Table Action Header-->
    <TableActionMenu>
      <!-- <template v-slot:searchTable>
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
      </template> -->
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
      :data-source="matchesResult"
      :pagination="{ pageSize: 10 }"
    >
      <pre>{{ matchesResult }}</pre>
      <template #bodyCell="{ column, text, record, index }">
        <template v-if="column.dataIndex === 'index'">
          {{ index + 1 }}
        </template>
        <!-- Team_A -->
        <template v-if="column.dataIndex === 'match'">
          <span class="font-bold mx-2">{{ `${record.match.team_a.name}` }}</span>
          <a-avatar class="bg-red-600">
            <template #icon>
              <div>
                <span class="font-code">{{ `${record.match.team_a.code}` }}</span>
              </div>
            </template>
          </a-avatar>
          VS
        </template>
        <!-- Team_B -->
        <template v-if="column.dataIndex === 'match'">
          <span class="font-bold mx-2">{{ `${record.match.team_b.name}` }}</span>
          <a-avatar class="bg-yellow-500">
            <template #icon>
              <div>
                <span class="font-code">{{ `${record.match.team_b.code}` }}</span>
              </div>
            </template>
          </a-avatar>
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
import MatchResultUaseCase from "@/usecases/matchResult/matchResultUaseCase";
import { onMounted } from "vue";
import helpers from "@/hooks/helpers";

const {
  loadAllMatchResult,
  onCreate,
  onDelete,
  onEdit,
  matchesResult,
} = MatchResultUaseCase;

const columns = [
  {
    title: "ລຳດັບ",
    dataIndex: "index",
  },
  {
    title: "ແມັດການແຂ່ງຂັນ",
    dataIndex: "match",
  },
  {
    title: "ຄະແນນທີມA",
    dataIndex: "team_a_score",
  },
  {
    title: "ຄະແນນທີມB",
    dataIndex: "team_b_score",
  },
  {
    title: "ຜົົນການແຂງຂັນ",
    dataIndex: "win_team",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];
onMounted(() => {
  loadAllMatchResult();
});
</script>

<style scoped>
.font-code {
  font-size: 12px;
}
</style>
