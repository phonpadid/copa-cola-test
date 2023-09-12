<template>
  <a-menu
      v-for="(single) in MenuList"
      :key="single.id"
      mode="inline"
      class="bg-sidebar"
      style="background: #b33939"
      v-model:selectedKeys="selectedKeys">
    <a-menu-item :key="single.id" @click="handleChangeMenu(single)">

      <template #icon>
        <span class="text-base"><i :class="single.icon"></i></span>
      </template>
      <span class="ml-2 text-base font-light">{{ single.name }}</span>
    </a-menu-item>
  </a-menu>
</template>

<script setup>
import {ref, reactive} from "vue";
import {useRouter} from "vue-router";
import {useStore} from "vuex";

const selectedKeys = ref(['0']);
const router = useRouter();
const store = useStore();
/*menu list*/
const MenuList = reactive([
  {
    id: 1,
    name: "Office",
    icon: "far fa-minus",
    route: "office.index"
  },
  {
    id: 2,
    name: "Office Create",
    icon: "far fa-minus",
    route: "office.create"
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
