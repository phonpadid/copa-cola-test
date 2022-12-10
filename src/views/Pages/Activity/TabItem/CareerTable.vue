<template>
  <TableActionMenu>
    <template v-slot:searchTable>
      <a-input-search/>
    </template>
    <template v-slot:actionButton>
      <a-button type="primary" class="base-color-theme" @click="onCreate">
        Create New
      </a-button>
    </template>
  </TableActionMenu>
  <a-row :gutter="[8,8]">
    <a-col :sm="24" :md="12" :lg="8" v-for="item in career">
      <CardCareer :career="item"/>
    </a-col>
  </a-row>
</template>

<script setup>
import {useRouter} from "vue-router";
import bodyHelpers from "@/utils/BodyHelpers";
import {onMounted, ref} from "vue";

const router = useRouter();
import {useStore} from "vuex";

const store = useStore();
const career = ref([])

function fetchCareer() {
  store.dispatch("data-resources/listing", {
    actionUri: 'variable',
    options_request: bodyHelpers([
      {type: "career"},
    ])
  }).then((res) => {
    if (res.code === 200) {
      career.value = res.data;
      console.log(career.value)
    }
  }).catch((error) => {
    console.log(error)
  })
}

function onCreate() {
  router.push({
    name: "career.create"
  }).catch(() => {

  })
}

onMounted(() => {
  fetchCareer();
})
</script>

<style scoped>

</style>