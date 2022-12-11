<template>
  <a-menu style="background-color: #F3F3F3" v-for="menu in MenuList" v-model:selectedKeys="selectedKeys"
          @click="handleChangeMenu(menu)">
    <a-menu-item :key="menu.id" class="hover:text-black">
      <span class="text-base text-gray-600"><i :class="menu.icon"></i></span>
      <span style="color: #000c17 !important;" class="ml-2 text-base font-light">{{ menu.name }}</span>
    </a-menu-item>
  </a-menu>
  <div class="w-full ml-4 cursor-pointer mt-1" @click="logout">
    <span class="text-base text-gray-600"><i class="far fa-sign-out-alt"></i></span>
    <span style="color: #000c17 !important;" class="ml-2 text-base font-light">Logout</span>
  </div>
</template>

<script setup>
import {ref, reactive} from "vue";
import {useRouter} from "vue-router";
import {useStore} from "vuex";
import {notificationSuccess} from "@/utils/message";

const selectedKeys = ref(['0']);
const router = useRouter();
const store = useStore();
/*menu list*/
const MenuList = reactive([
  {
    id: "0",
    name: "Dashboard",
    icon: "fas fa-chart-line",
    route: "dashboard.index"
  },
  {
    id: "1",
    name: "Company",
    icon: "far fa-building",
    route: "company.index"
  },
  {
    id: "2",
    name: "Employee",
    icon: "fas fa-users",
    route: "employee.index"
  },
  {
    id: "3",
    name: "Events",
    icon: "far fa-calendar-alt",
    route: "event.index"
  },
  {
    id: "4",
    name: "Activity and Career",
    icon: "far fa-calendar-alt",
    route: "activity.index"
  },
  {
    id: "5",
    name: "FAQ",
    icon: "far fa-chalkboard-teacher",
    route: "FAQ.index"
  },

]);

/*change menu */
function handleChangeMenu(menu) {
  router.push({
    name: menu.route,
  }).catch(() => {
  })

}

function logout() {
  localStorage.removeItem("CREDENTIAL");
  window.location.reload();
}

</script>

<style scoped lang="scss">
</style>