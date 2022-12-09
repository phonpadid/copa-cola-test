<template>
  <a-layout class="h-screen overflow-hidden w-full">
    <a-layout-sider style="background-color: #F3F3F3" width="280" class="h-screen flex flex-col bg-white"
                    v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="w-full h-[120px] flex items-center px-3">
        <div class="w-full h-[60px] flex">
          <div class="w-[55px] h-[55px] rounded-full bg-green-800 flex justify-center items-center text-xl text-white">
            HK
          </div>
          <div class="w-[200px] pl-3 flex justify-center flex-col h-full">
            <h1 class="m-0 font-bold">Vongsavanh kpt</h1>
            <p class="m-0 text-xs font-light text-gray-500">vongsavanh@gmail.com</p>
          </div>
        </div>
      </div>
      <div class="w-full h-[600px] overflow-y-auto overflow-x-hidden pl-2 text-justify">
        <!--      menu sidebar-->
        <TheMenu/>
        <!--    end  menu sidebar-->
      </div>
      <!--      footer sidebar-->
      <div class="absolute bottom-0 flex justify-center items-center w-full h-[40px] bg-white">
        <h2 class="text-sm text-gray-500 font-light uppercase">2022 © hackathon event</h2>
      </div>
      <!--     end footer sidebar-->

    </a-layout-sider>
    <a-layout class="w-full">
      <a-layout-header style="background-color: #F3F3F3"
                       class="bg-white w-full flex items-center p-0 pr-6 h-[35px]">
        <!--        <SelectOutlined-->
        <!--            v-if="collapsed"-->
        <!--            class="trigger"-->
        <!--            @click="() => (collapsed = !collapsed)"-->
        <!--        />-->
        <!--        <SelectOutlined v-else class="trigger" @click="() => (collapsed = !collapsed)"/>-->
      </a-layout-header>
      <a-layout-content>
        <div
            class="w-full bg-white rounded-tl-lg h-full overflow-y-auto p-4 text-justify">
          <BreadcrumbHeader/>
          <router-view/>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import {SelectOutlined} from "@ant-design/icons-vue";
import {ref, onMounted} from "vue";

const collapsed = ref(false);


</script>
<style>
</style>