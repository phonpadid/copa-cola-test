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
    <a-col :sm="24" :md="24" :lg="8" v-for="item in activity">
      <CardActivity :activity="item"/>
    </a-col>
  </a-row>
</template>

<script setup>
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {useStore} from "vuex";
import bodyHelpers from "@/utils/BodyHelpers";

const store = useStore();
const router = useRouter();
const activity = ref([]);
const career = ref([]);

function fetchActivity() {
  store.dispatch("data-resources/listing", {
    actionUri: 'variable',
    options_request: bodyHelpers([
      {type: "activity"},
    ])
  }).then((res) => {
    if (res.code === 200) {
      activity.value = res.data;
    }
  }).catch((error) => {
    console.log(error)
  })
}



function onCreate() {
  router.push({
    name: "activity.create"
  }).catch(() => {
  })
}

onMounted(() => {
  fetchActivity();
})
</script>
<style scoped>
</style>