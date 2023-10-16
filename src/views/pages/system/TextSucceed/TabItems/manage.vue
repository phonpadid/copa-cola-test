<template>
  <div class="card mt-4">
    <div class="mt-2" v-for="(message, index) in messages" :key="index">
      <span class="text-xl">* {{ message.label }}</span>
      <FormText
        ref="formTextRef"
        :self="message.self"
        :key="`form-text-${index}`"
        @onSuccess="onSuccessSendMessage"
        :label="message.label"
        v-model="message.message"
      />
    </div>
    <!-- Show Modal -->
    <div>
      <a-button type="primary" @click="showModal">ສົ່ງ</a-button>
      <a-modal
        v-model:visible="showTextModal"
        :footer="null"
        :closable="false"
        width="1000px"
        class="font-bold"
      >
        <template #title>
          <div class="text-white px-4 py-4 text-head">
            <h3 class="Text-head-Succeesd text-center text-3xl">
              * ຂໍ້ຄວາມສຳເລັດຮູບ ເພື່ອເລືອກສົ່ງຫາກຸ່ມຜູ້ຮ່ວມກິດຈະກຳ
            </h3>
            <button @click="Close">
              <i class="fal fa-times-circle icon_close_add text-xl"></i>
            </button>
          </div>
        </template>
        <a-radio-group v-model:value="selectedOption">
          <a-radio value="all_participants">ສົົ່ງໃຫ້ທຸກຄົນ</a-radio>
          <a-radio value="winning_participants">ສົົ່ງຫາຊະເພາະຜູ້ທີ່ເຄີຍທວຍຖືກ</a-radio>
          <a-radio value="voted_participants">voted_participants</a-radio>
        </a-radio-group>
        <a-select
          class="w-[300px]"
          v-show="selectedOption === 'winning_participants'"
          :options="matchOptions"
          placeholder="Select winning_participants "
        />
        <a-select
          class="w-[300px]"
          v-show="selectedOption === 'voted_participants'"
          :options="matchResultOptions"
          placeholder="Select voted_participants"
        />
        <br /><br />
        <a-button type="primary" class="mx-4 hover:bg-red-500" @click="sendSelectedOption"
          >ສົົ່ງຂໍ້ມູນ</a-button
        >
      </a-modal>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs } from "vue";
import { saveMessageSucceed } from "@/usecases/MessagesSucceed/MessagesSuccedUseCases";

const showTextModal = ref(false);
const selectedOption = ref(1);

function showModal() {
  showTextModal.value = !showTextModal.value;
}
const handleOk = (e) => {
  console.log(e);
  visible.value = false;
};

function Close() {
  showTextModal.value = false;
}

const formTextRef = ref();
function onHandleSave() {
  for (let i = 0; i < formTextRef.value.length; i++) {
    formTextRef.value[i].onSuccessSendMessage();
  }
  console.log(state.messages);
  const result = state.messages.map((message) => ({
    condition: message.condition,
    value: message.message,
    is_enable: message.is_enable,
  }));
  saveMessageSucceed(result);
}
const state = reactive({
  matchOptions: [],
  matchResultOptions: [],
  messages: [
    {
      self: 0,
      message: "",
      condition: "condition_one",
      is_enable: true,
      label: "ຂໍ້ຄວາມສຳເລັດຮູບ ເພື່ອເລືອກສົ່ງຫາກຸ່ມຜູ້ຮ່ວມກິດຈະກຳ",
    },
  ],
});

function onSuccessSendMessage(e) {
  state.messages[e.self].message = e.message;
}
const { messages, matchOptions, matchResultOptions } = toRefs(state);

function sendSelectedOption() {
  if (selectedOption.value === 1) {
    console.log("Joe");
    // You can implement this logic
  } else if (selectedOption.value === 2) {
    console.log("Nome");
    // Send to "ສະເພາະຄົນທີທ້ວຍຖືກ"
    // You can implement this logic
  }
}
// function sendText() {
//   if (value.value === 1) {
//     // Send message to "ທຸກຄົົນ"
//     console.log("Sending to ທຸກຄົົນ");
//   } else if (value.value === 2) {
//     // Send message to "ສະເພາະຄົນທີທ້ວຍຖືກ"
//     console.log("Sending to ສະເພາະຄົນທີທ້ວຍຖືກ");
//   }
// }
</script>
<style scoped lang="scss">
.icon_close_add {
  position: absolute;
  left: 900px;
  top: 42px;
}

@media (max-width: 768px) {
  .icon_close_add {
    position: relative;
    left: auto;
  }
}
</style>
