<template>
  <a-menu style="background-color: #F3F3F3" v-for="menu in MenuList" v-model:selectedKeys="selectedKeys"
          @click="handleChangeMenu(menu)">
    <a-menu-item :key="menu.id" class="hover:text-black">
      <span class="text-base text-gray-600"><i :class="menu.icon"></i></span>
      <span style="color: #000c17 !important;" class="ml-2 text-base font-light">{{ menu.name }}</span>
    </a-menu-item>
  </a-menu>
</template>

<script setup>
import {ref, reactive} from "vue";
import {useRouter} from "vue-router";

const selectedKeys = ref(['0']);
const router = useRouter();
/*menu list*/
const MenuList = reactive([
  {
    id: "0",
    name: "Company",
    icon: "far fa-building",
    route: "company.index"
  },
]);

/*change menu */
function handleChangeMenu(menu) {
  router.push({
    name: menu.route,
  }).catch(() => {
  })

}

</script>

<style scoped lang="scss">
</style>