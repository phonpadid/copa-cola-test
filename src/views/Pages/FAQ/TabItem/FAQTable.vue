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
    <a-col :sm="24" :md="12" :lg="8" v-for="item in faqItem">
      <CardFAQ :faqItem="item"/>
    </a-col>
  </a-row>
</template>

<script setup>
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import bodyHelpers from "@/utils/BodyHelpers";
import {useStore} from "vuex";

const router = useRouter();
const store = useStore();
const faqItem = ref([]);

function fetchFAQ() {
  store.dispatch("data-resources/listing", {
    actionUri: 'post',
    options_request: bodyHelpers([
      {type: "faq"},
    ])
  }).then((res) => {
    if (res.code === 200) {
      faqItem.value = res.data;
    }
  }).catch((error) => {
    console.log(error)
  })
}

function onCreate() {
  router.push({
    name: "FAQ.create"
  }).catch(() => {
  })
}

onMounted(() => {
  fetchFAQ();
})
</script>
<style scoped>
</style>