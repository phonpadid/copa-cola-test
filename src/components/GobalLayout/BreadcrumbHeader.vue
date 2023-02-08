<template>
  <a-page-header
      class="p-4 bg-transparent font-black text-white"
      :title="$route.meta.title"
  >
    <a-breadcrumb :routes="routes">
      <template #itemRender="{ route, routes, paths,meta }">
        <span v-if="routes.indexOf(route) === routes.length - 1">
          <a-breadcrumb-item v-if="$route.meta.name === 'Office Info'" style="cursor: pointer">
                <a-tag color="processing">
                   <span class="text-sm">Home</span>
                </a-tag>
          </a-breadcrumb-item>

            <a-breadcrumb-item v-if="$route.meta.name === 'Operator Info'" style="cursor: pointer">
                <a-tag color="processing">
                   <span class="text-sm">Home</span>
                </a-tag>
          </a-breadcrumb-item>

              <a-breadcrumb-item v-if="$route.meta.name === 'List Of Route Voice'" style="cursor: pointer">
                <a-tag color="processing">
                   <span class="text-sm">Home</span>
                </a-tag>
          </a-breadcrumb-item>
          <a-breadcrumb-item v-if="$route.meta.name === 'List Of Route SMS'" style="cursor: pointer">
                <a-tag color="processing">
                   <span class="text-sm">Home</span>
                </a-tag>
          </a-breadcrumb-item>


            <a-breadcrumb-item v-if="$route.meta.name === 'List Of Route Country'" style="cursor: pointer">
                <a-tag color="processing">
                   <span class="text-sm">Home</span>
                </a-tag>
          </a-breadcrumb-item>

          <a-breadcrumb-item v-if="$route.meta.name === 'Partner Info'" style="cursor: pointer">
                <a-tag color="processing">
                   <span class="text-sm">Home</span>
                </a-tag>
          </a-breadcrumb-item>
           <a-breadcrumb-item v-if="$route.meta.name === 'Currency Info'" style="cursor: pointer">
                <a-tag color="processing">
                   <span class="text-sm">
                     <router-link :to="{name:'currency.index'}">
                       Home
                     </router-link>
                   </span>
                </a-tag>
          </a-breadcrumb-item>
            <a-breadcrumb-item v-if="$route.meta.name === 'IncomingRate Info'" style="cursor: pointer">
                <a-tag color="processing">
                   <span class="text-sm">
                     <router-link :to="{name:'incomingRate.index'}">
                       Home
                     </router-link>
                   </span>
                </a-tag>
          </a-breadcrumb-item>

            <a-breadcrumb-item v-if="$route.meta.name === 'IncomingRateSMS Info'" style="cursor: pointer">
                <a-tag color="processing">
                   <span class="text-sm">
                     <router-link :to="{name:'incomingRateSMS.index'}">
                       Home
                     </router-link>
                   </span>
                </a-tag>
          </a-breadcrumb-item>

            <a-breadcrumb-item v-if="$route.meta.name === 'OutGoingRate Info'" style="cursor: pointer">
                <a-tag color="processing">
                   <span class="text-sm">
                     <router-link :to="{name:'outGoingRate.index'}">
                       Home
                     </router-link>
                   </span>
                </a-tag>
          </a-breadcrumb-item>

           <a-breadcrumb-item v-if="$route.meta.name === 'TestClassify Info'" style="cursor: pointer">
                <a-tag color="processing">
                   <span class="text-sm">
                     <router-link :to="{name:'testClassify.index'}">
                       Home
                     </router-link>
                   </span>
                </a-tag>
          </a-breadcrumb-item>
           <a-breadcrumb-item v-if="$route.meta.name === 'HUR Threshold Info'" style="cursor: pointer">
                <a-tag color="processing">
                   <span class="text-sm">
                     <router-link :to="{name:'HURThreshold.index'}">
                       Home
                     </router-link>
                   </span>
                </a-tag>
          </a-breadcrumb-item>

              <a-breadcrumb-item v-if="$route.meta.name === 'Re-Run SMS'" style="cursor: pointer">
                <a-tag color="processing">
                   <span class="text-sm">
                     <router-link :to="{name:'reRunSMS.index'}">
                       Home
                     </router-link>
                   </span>
                </a-tag>
          </a-breadcrumb-item>

             <a-breadcrumb-item v-if="$route.meta.name === 'Re-Run Voice'" style="cursor: pointer">
                <a-tag color="processing">
                   <span class="text-sm">
                     <router-link :to="{name:'reRunSMS.index'}">
                       Home
                     </router-link>
                   </span>
                </a-tag>
          </a-breadcrumb-item>

           <a-breadcrumb-item v-if="$route.meta.name === 'Voice CDRs'" style="cursor: pointer">
                <a-tag color="processing">
                   <span class="text-sm">
                     <router-link :to="{name:'voiceCDRs.index'}">
                       Home
                     </router-link>
                   </span>
                </a-tag>
          </a-breadcrumb-item>
           <a-breadcrumb-item v-if="$route.meta.name === 'Voice OG CDRs'" style="cursor: pointer">
                <a-tag color="processing">
                   <span class="text-sm">
                     <router-link :to="{name:'voiceOGCDRs.index'}">
                       Home
                     </router-link>
                   </span>
                </a-tag>
          </a-breadcrumb-item>
           <a-breadcrumb-item v-if="$route.meta.name === 'SMS CDRs'" style="cursor: pointer">
                <a-tag color="processing">
                   <span class="text-sm">
                     <router-link :to="{name:'SMS-CDRs.index'}">
                       Home
                     </router-link>
                   </span>
                </a-tag>
          </a-breadcrumb-item>

             <a-breadcrumb-item v-if="$route.meta.name === 'Reconcile CDRs IC'" style="cursor: pointer">
                <a-tag color="processing">
                   <span class="text-sm">
                     <router-link :to="{name:'reconcileCDRsIC.index'}">
                       Home
                     </router-link>
                   </span>
                </a-tag>
          </a-breadcrumb-item>

           <a-breadcrumb-item v-if="$route.meta.name === 'Reconcile CDRs OG'" style="cursor: pointer">
                <a-tag color="processing">
                   <span class="text-sm">
                     <router-link :to="{name:'reconcileCDRsOG.index'}">
                       Home
                     </router-link>
                   </span>
                </a-tag>
          </a-breadcrumb-item>
           <a-breadcrumb-item v-if="$route.meta.name === 'User Info'" style="cursor: pointer">
                <a-tag color="processing">
                   <span class="text-sm">
                     <router-link :to="{name:'user.index'}">
                       Home
                     </router-link>
                   </span>
                </a-tag>
          </a-breadcrumb-item>
             <a-breadcrumb-item v-if="$route.meta.name === 'Auto Number Info'" style="cursor: pointer">
                <a-tag color="processing">
                   <span class="text-sm">
                     <router-link :to="{name:'autoNumber.index'}">
                       Home
                     </router-link>
                   </span>
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