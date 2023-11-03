<template>
  <a-layout class="h-screen overflow-hidden w-full">
    <a-layout-sider
      width="270"
      class="h-screen pl-0 bg-sidebar flex flex-col"
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
      style="background: #b33939"
    >
      <div class="w-full h-[120px] flex items-center px-3 border-b border-gray-100">
        <div class="w-full h-[60px] flex">
          <div
            class="w-[55px] h-[55px] overflow-hidden rounded-full bg-gray-200 flex justify-center items-center text-xl text-white"
          >
            <img class="w-full h-full overflow-hidden object-cover" :src="logo" alt="" />
          </div>
          <div class="w-[200px] pl-3 flex justify-center flex-col h-full">
            <h1 class="m-0 text-white font-black text-xl">Coca-Cola</h1>
            <p class="m-0 text-xs font-light text-white">COPA Coca-Cola Laos</p>
          </div>
        </div>
      </div>
      <div class="w-full h-screen overflow-y-auto overflow-x-hidden text-justify">
        <!--      menu sidebar-->
        <TheMenu />
        <!--    end  menu sidebar-->
      </div>

      <!--      footer sidebar-->
      <div
        class="absolute bottom-0 flex justify-center items-center w-full h-[40px] border border-red-500 bg-white"
      >
        <h2 class="text-sm text-gray-500 font-light uppercase">2023 © Coca Cola Admin</h2>
      </div>
      <!--     end footer sidebar-->
    </a-layout-sider>
    <a-layout class="w-full">
      <a-layout-header
        style="background: #b33939"
        class="w-full flex items-center pl-6 pr-6 h-[35px]"
      >
        <UnorderedListOutlined
          style="color: #ffffff"
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <UnorderedListOutlined
          style="color: #ffffff"
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <!-- User Logout  -->
        <div
          class="box-logout w-[30px] h-[30px] overflow-hidden rounded-full bg-gray-300 flex justify-center items-center"
        >
          <a-menu v-model:selectedKeys="current" mode="horizontal">
            <a-sub-menu key="sub1">
              <template #icon>
                <UserOutlined class="user" />
              </template>
              <a-menu-item-group title="ຈັດການຜູ້ໃຊ້">
                <a-menu-item key="setting:1"> ຂໍ້ມູນຜູ້ໃຊ້</a-menu-item>
                <a-menu-item key="setting:2">ປ່ຽນລະຫັດຜ່ານ </a-menu-item>
                <a-menu-item key="setting:3" @click="logout">ອອກຈາກລະບົບ</a-menu-item>
              </a-menu-item-group>
            </a-sub-menu>
          </a-menu>
        </div>
      </a-layout-header>
      <a-layout-content>
        <div
          class="w-full bg-white rounded-tl-lg h-full overflow-y-auto p-4 text-justify"
        >
          <BreadcrumbHeader />
          <router-view />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import {
  UnorderedListOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
import { ref, reactive } from "vue";
import TheMenu from "@/components/GobalLayout/TheMenu.vue";
import BreadcrumbHeader from "@/components/GobalLayout/BreadcrumbHeader.vue";
import logo from "@/assets/image/coca-cola-bottle-cap5138.logowik.com.webp";
import { notificationSuccess, messageError, notificationWarning } from "@/hooks/message";
const collapsed = ref(false);
const current = ref(["mail"]);
import { useRouter } from "vue-router";
const router = useRouter();
import { useStore } from "vuex";
const store = useStore();
const isLoading = ref(false);
const form = reactive({
  // Define the form properties here
  email: "",
  password: "",
});

async function logout() {
  try {
    isLoading.value = true;
    await store.dispatch("auth/logout").then((res) => {
      if (res) {
        notificationSuccess({
          title: "ອອກຈາກລະບົບສຳເລັດ",
          description: "ອອກຈາກລະບົບສຳເລັດ...",
          position: "topRight",
        });
        isLoading.value = false;
      }
    });
  } catch (e) {
    messageError("ເກີດຂໍ້ຜິດພາດ...");
    isLoading.value = false;
    // await router.push("../pages/system/Login.vue");
  }
}
</script>
<style scoped>
.box-logout {
  position: absolute;
  right: 20px;
  cursor: pointer;
}
.user {
  position: relative;
  left: 4px;
}
</style>
