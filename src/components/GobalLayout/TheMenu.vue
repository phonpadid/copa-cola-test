<template>
  <a-menu
      v-for="(menu) in MainMenu"
      :key="menu.id"
      mode="inline"
      class="text-base bg-sidebar"
      v-model:selectedKeys="selectedKeys">

    <a-sub-menu :key="menu.id">
      <template #icon>
        <span class="text-base"><i :class="menu.icon"></i></span>
      </template>
      <template #title class="text-base">
        {{ menu.name }}
      </template>
      <a-menu-item v-for="(sub,index) in menu.group" :key="sub.id" @click="handleChangeMenu(sub)">
        <span class="text-base"><i :class="sub.icon"></i></span>
        {{ sub.name }}
      </a-menu-item>
    </a-sub-menu>
  </a-menu>

  <a-menu
      v-for="(single) in MenuList"
      :key="single.id"
      mode="inline"
      class="bg-sidebar"
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

const MainMenu = reactive([
  //Setting
  {
    id: 1,
    name: "Operator Information",
    icon: "far fa-cog",

    group: [
      {
        id: 11,
        name: "Operator",
        route: "operator.index",
        icon: "far fa-tools"
      },
      {
        id: 12,
        name: "List Of Route Voice",
        route: "listRouteVoice.index",
        icon: "far fa-tools"
      },
      {
        id: 13,
        name: "List Of Route SMS",
        route: "listRouteSMS.index",
        icon: "far fa-tools"
      },
      {
        id: 14,
        name: "List Of Route Country",
        route: "listRouteCountry.index",
        icon: "far fa-tools"
      },
      {
        id: 15,
        name: "Partner",
        route: "partner.index",
        icon: "fas fa-handshake-alt"
      },
    ]
  },
  {
    id: 2,
    name: "Config Tariff",
    icon: "far fa-cog",

    group: [
      {
        id: 21,
        name: "Currency",
        route: "currency.index",
        icon: "far fa-usd-circle"
      },
      {
        id: 22,
        name: "InComing Rate",
        route: "incomingRate.index",
        icon: "far fa-heart-rate"
      },
      {
        id: 23,
        name: "OutGoing Rate",
        route: "outGoingRate.index",
        icon: "far fa-tools"
      },
      {
        id: 24,
        name: "InComing Rate SMS",
        route: "incomingRateSMS.index",
        icon: "far fa-tools"
      },
      {
        id: 25,
        name: "Test Classify",
        route: "testClassify.index",
        icon: "far fa-tools"
      },
    ]
  },
  //System
  {
    id: 2,
    name: "System",
    icon: "far fa-user-chart",

    group: [
      {
        id: 21,
        name: "Office Information",
        icon: "far fa-building",
        route: "office.index"
      },
      {
        id: 212,
        name: "User",
        icon: "far fa-users",
        route: "user.index"
      },
      {
        id: 213,
        name: "Auto Number",
        icon: "fas fa-sort-numeric-up",
        route: "autoNumber.index"
      },

    ]
  },
  //ReRun  All Reports
  {
    id: 2,
    name: "Re-Run All Reports",
    icon: "far fa-file-chart-line",
    group: [
      {
        id: 21,
        name: "Re-Run Voice",
        icon: "far fa-file-chart-line",
        route: "reRunVoice.index"
      },
      {
        id: 22,
        name: "Re-Run SMS",
        icon: "far fa-file-chart-line",
        route: "reRunSMS.index"
      },

    ]
  },
  //CDRs Export
  {
    id: 3,
    name: "CDRs Export",
    icon: "far fa-database",
    group: [
      {
        id: 31,
        name: "Voice CDRs",
        icon: "far fa-file-chart-line",
        route: "voiceCDRs.index"
      },
      {
        id: 32,
        name: "Voice OG CDRs",
        icon: "far fa-file-chart-line",
        route: "voiceOGCDRs.index"
      },
      {
        id: 33,
        name: "SMS CDRs",
        icon: "far fa-file-chart-line",
        route: "SMS-CDRs.index"
      },

    ]
  },

  //Reconcile CDRs
  {
    id: 4,
    name: "Reconcile CDRs",
    icon: "far fa-database",
    group: [
      {
        id: 40,
        name: "Reconcile CDRs IC",
        icon: "far fa-file-chart-line",
        route: "reconcileCDRsIC.index"
      },
      {
        id: 41,
        name: "Reconcile CDRs OG",
        icon: "far fa-file-chart-line",
        route: "reconcileCDRsOG.index"
      },

    ]
  },

  //Settlement


  //Credit And Debit
  {
    id: 50,
    name: "Credit And Debit",
    icon: "far fa-database",
    group: [
      {
        id: 51,
        name: "Adjustment Voice",
        icon: "far fa-file-chart-line",
        route: "adjustment-voice.index"
      },
      {
        id: 52,
        name: "Adjustment SMS",
        icon: "far fa-file-chart-line",
        route: "adjustment-sms.index"
      },
      {
        id: 53,
        name: "PrintCredit And Debit",
        icon: "far fa-file-chart-line",
        route: "print-credit-and-debit.index"
      },
    ]
  },

  //List
  {
    id: 60,
    name: "List",
    icon: "far fa-database",
    group: [
      {
        id: 61,
        name: "Bank Account",
        icon: "far fa-file-chart-line",
        route: "bank-account.index"
      },
      {
        id: 62,
        name: "Currency",
        icon: "far fa-file-chart-line",
        route: "currencies.index"
      },
      {
        id: 63,
        name: "Exchange Rate",
        icon: "far fa-file-chart-line",
        route: "exchange-rate.index"
      },
    ]
  },


  //List Of Invoice
  {
    id: 70,
    name: "List Of Invoice",
    icon: "far fa-database",
    group: [
      {
        id: 71,
        name: "ApprovedInvoice",
        icon: "far fa-file-chart-line",
        route: "approved.index"
      },
      {
        id: 72,
        name: "PartnerInvoice",
        icon: "far fa-file-chart-line",
        route: "partner-invoice.index"
      },
      {
        id: 73,
        name: "StatemtAndInvoiceValidation",
        icon: "far fa-file-chart-line",
        route: "statemt-invoice-validation.index"
      },
      {
        id: 74,
        name: "View And Export Invoice",
        icon: "far fa-file-chart-line",
        route: "view-and-export-invoice.index"
      },
    ]
  },

  //List Of Invoice SMS
  {
    id: 80,
    name: "List Of Invoice SMS",
    icon: "far fa-database",
    group: [
      {
        id: 81,
        name: "ApprovedInvoice SMS",
        icon: "far fa-file-chart-line",
        route: "approved-sms.index"
      },
      {
        id: 82,
        name: "PartnerInvoice SMS",
        icon: "far fa-file-chart-line",
        route: "partner-invoice-sms.index"
      },
      {
        id: 84,
        name: "View And Export Invoice SMS",
        icon: "far fa-file-chart-line",
        route: "view-and-export-invoice-sms.index"
      },
    ]
  },


  //List Of Payment
  {
    id: 90,
    name: "List Of Payment",
    icon: "far fa-database",
    group: [
      {
        id: 91,
        name: "ListOfPayment SMS",
        icon: "far fa-file-chart-line",
        route: "list-of-payment-sms.index"
      },
      {
        id: 92,
        name: "ListOfPayment Voice",
        icon: "far fa-file-chart-line",
        route: "list-of-payment-voice.index"
      },
    ]
  },

  //List Of Receipt
  {
    id: 100,
    name: "List Of Receipt",
    icon: "far fa-database",
    group: [
      {
        id: 101,
        name: "InterconnectReport",
        icon: "far fa-file-chart-line",
        route: "interconnect-report.index"
      },
      {
        id: 102,
        name: "ListOfReceiptSMS",
        icon: "far fa-file-chart-line",
        route: "list-of-receipt-sms.index"
      },
    ]
  },
]);
const MenuList = reactive([
  {
    id: 200,
    name: "HUR Threshold",
    icon: "fas fa-wrench",
    route: "HURThreshold.index"
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
