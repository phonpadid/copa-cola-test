<template>
  <div class="w-full relative flex flex-col p-8 min-h-[200px] border-2 border-gray-200">
    <h1 class="text-base font-bold">{{ subStringTitle(faqItem.title) }}</h1>
    <p class="mt-2 text-sm text-justify">{{ subStringContent(faqItem.body) }}</p>
    <div
        class="w-[25px] text-white cursor-pointer flex justify-center items-center absolute rounded-full right-12 h-[25px] bg-blue-500">
      <i class="far fa-pencil-alt"></i>
    </div>
    <div
        class="w-[25px] text-white cursor-pointer flex justify-center items-center absolute rounded-full   right-2 h-[25px] bg-red-500">
      <i class="fas fa-trash"></i>
    </div>
    <div class="w-60px absolute bottom-8 right-8">
      <a-switch class="bg-blue-500" @click="changeStatus" v-model:checked="checked">
        <template #checkedChildren>
          <check-outlined/>
        </template>
        <template #unCheckedChildren>
          <close-outlined/>
        </template>
      </a-switch>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {CheckOutlined, CloseOutlined} from "@ant-design/icons-vue";

const checked = ref(false);
const props = defineProps({
  faqItem: {},
})

function subStringTitle(text) {
  if (text) {
    return text.substring(0, 25) + '...'
  }
}
function subStringContent(text) {
  if (text) {
    return text.substring(0, 140) + '...'
  }
}


</script>

<style scoped>

</style>