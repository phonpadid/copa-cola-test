<template>
  <a-menu
    v-for="single in MenuList"
    :key="single.id"
    mode="inline"
    class="bg-sidebar"
    style="background: #b33939"
    v-model:selectedKeys="selectedKeys"
  >
    <a-menu-item :key="single.id" @click="handleChangeMenu(single)">
      <template #icon>
        <span class="text-base"><i :class="single.icon"></i></span>
      </template>
      <span class="ml-2 text-base font-light">{{ single.name }}</span>
    </a-menu-item>
  </a-menu>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const selectedKeys = ref(["0"]);
const router = useRouter();
const store = useStore();
/*menu list*/
const MenuList = reactive([
  // {
  //   id: 1,
  //   name: "Office",
  //   icon: "far fa-minus",
  //   route: "office.index"
  // },
  // {
  //   id: 9,
  //   name: "ໜ້າຫຼັກ",
  //   icon: "far fa-minus",
  //   route: "dashboard.index"
  // },
  {
    id: 10,
    name: "ຈັດການທີມ",
    icon: "far fa-minus",
    route: "managetext.index",
  },
  {
    id: 11,
    name: "ຈັດການແມັດ",
    icon: "far fa-minus",
    route: "match.index",
  },
  {
    id: 12,
    name: "ຈັດການແມັດResult",
    icon: "far fa-minus",
    route: "matchresult.index",
  },
  {
    id: 13,
    name: "ຈັດການຊຸດຂໍ້ຄວາມ",
    icon: "far fa-minus",
    route: "text.index",
  },
  {
    id: 20,
    name: "ຈັດການຜູ້ໃຊ້",
    icon: "far fa-minus",
    route: "user.index",
  },
]);

/*change menu */
function handleChangeMenu(menu) {
  router
    .push({
      name: menu.route,
    })
    .catch(() => {});
}

function logout() {
  localStorage.removeItem("CREDENTIAL");
  window.location.reload();
}
</script>

<style scoped lang="scss"></style>
