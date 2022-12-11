<template>
  <a-layout class="h-screen overflow-hidden w-full">
    <a-layout-sider
      style="background-color: #F3F3F3"
      width="270"
      class="h-screen flex flex-col bg-white"
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
    >
      <div class="w-full h-[120px] flex items-center px-3">
        <div class="w-full h-[60px] flex">
          <div
            class="w-[55px] h-[55px] rounded-full bg-green-800 flex justify-center items-center text-xl text-white"
          >{{typeof displayName == 'string' ? displayName.substr(0,2) : '' }}</div>
          <div class="w-[200px] pl-3 flex justify-center flex-col h-full">
            <h1 class="m-0 font-bold">{{displayName}}</h1>
            <p class="m-0 text-xs font-light text-gray-500">{{me.email}}</p>
            <div class="flex" @click="copyToClipboard">
              <h1 id="myInput" class="m-0 font-bold mr-1">{{me.company.joinable_code}}</h1>
              <i class="fal fa-copy"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-[600px] overflow-y-auto overflow-x-hidden pl-2 text-justify">
        <!--      menu sidebar-->
        <TheMenu />
        <!--    end  menu sidebar-->
      </div>
      <!--      footer sidebar-->
      <div class="absolute bottom-0 flex justify-center items-center w-full h-[40px] bg-white">
        <h2 class="text-sm text-gray-500 font-light uppercase">2022 © hackathon event</h2>
      </div>
      <!--     end footer sidebar-->
    </a-layout-sider>
    <a-layout class="w-full">
      <a-layout-header
        style="background-color: #F3F3F3"
        class="bg-white w-full flex items-center p-0 pr-6 h-[35px]"
      >
        <!--                <SelectOutlined-->
        <!--                    v-if="collapsed"-->
        <!--                    class="trigger"-->
        <!--                    @click="() => (collapsed = !collapsed)"-->
        <!--                />-->
        <!--                <SelectOutlined v-else class="trigger" @click="() => (collapsed = !collapsed)"/>-->
      </a-layout-header>
      <a-layout-content>
        <div class="w-full bg-white rounded-tl-lg h-full overflow-y-auto p-4 text-justify">
          <BreadcrumbHeader />
          <router-view />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import { SelectOutlined } from "@ant-design/icons-vue";
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

const collapsed = ref(false);
const me = ref({
  company: {
    joinable_code: ""
  }
});
const store = useStore();

const fetchMe = () => {
  store
    .dispatch("data-resources/listing", {
      actionUri: `auth/me`
    })
    .then(res => {
      if (res.code === 200) {
        me.value = res.data;
      }
    })
    .catch(error => {
      console.log(error);
    });
};
function copyToClipboard() {
  // Get the text field
  var copyText = me.value.company.joinable_code;

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText);

  // Alert the copied text
  alert("Copied the text: " + copyText);
}

onMounted(() => fetchMe());
const displayName = computed(() =>
  me.value.name ? me.value.name : me.value.email
);
</script>
<style>
</style>