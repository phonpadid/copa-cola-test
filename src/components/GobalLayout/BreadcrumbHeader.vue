<template>
  <a-page-header
      class="p-4 bg-transparent font-black text-white"
      :title="$route.meta.title"
  >
    <a-breadcrumb :routes="routes">
      <template #itemRender="{ route, routes, paths,meta }">
        <span v-if="routes.indexOf(route) === routes.length - 1">
          <a-breadcrumb-item v-if="$route.meta.name === 'Company Info'" style="cursor: pointer">
                <a-tag color="processing">
                   <span class="text-sm">Home</span>
                </a-tag>
          </a-breadcrumb-item>
          <!--    Event -->
          <a-breadcrumb-item v-if="$route.meta.name === 'Event'" style="cursor: pointer">
                <a-tag color="processing">
                   <span class="text-sm">Home</span>
                </a-tag>
          </a-breadcrumb-item>

          <!--    Event Detail -->
          <a-breadcrumb-item v-if="$route.meta.name === 'Event Detail'" style="cursor: pointer">
                <a-tag color="processing">
                   <span class="text-sm">Home</span>
                </a-tag>
          </a-breadcrumb-item>
          <!--    Activity -->
          <a-breadcrumb-item v-if="$route.meta.name === 'Activity and Career'" style="cursor: pointer">
                <a-tag color="processing">
                   <span class="text-sm">Home</span>
                </a-tag>
          </a-breadcrumb-item>

          <!--    Activity Detail -->
          <a-breadcrumb-item v-if="$route.meta.name === 'Activity Detail'" style="cursor: pointer">
                <a-tag color="processing">
                   <span class="text-sm">Home</span>
                </a-tag>
          </a-breadcrumb-item>

          <!--    FAQ -->
          <a-breadcrumb-item v-if="$route.meta.name === 'Frequently Asked Question'" style="cursor: pointer">
                <a-tag color="processing">
                   <span class="text-sm">Home</span>
                </a-tag>
          </a-breadcrumb-item>


        </span>
        <span class="text-black"> / {{ $route.meta.title }}</span>
      </template>
    </a-breadcrumb>
  </a-page-header>
</template>
<script>
import {defineComponent, ref} from 'vue';
import {HomeOutlined} from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    HomeOutlined,
  },
  setup() {
    const routes = ref([
      {
        path: '/home',
        breadcrumbName: 'Home',
      },
    ]);
    return {
      routes,
    };
  },
});
</script>