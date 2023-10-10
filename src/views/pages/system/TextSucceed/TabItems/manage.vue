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
        <a-button type="primary" class="mx-4 hover:bg-red-500">ສົົ່ງຫາທຸກຄົົນ</a-button>
        <a-button type="primary" class="mx-4">ສົົ່ງຫາຊະເພາະຜູ້ທີ່ເຄີຍທວຍຖືກ</a-button>
        <a-radio v-model:checked="checked">Radio</a-radio>
      </a-modal>
    </div>
    <!-- <a-button label="Save" @click="" class="m-2" type="primary">ສົ່ງ</a-button> -->
  </div>
</template>

<script setup>
import { ref, reactive, toRefs } from "vue";
import { saveMessage } from "@/usecases/Messages/MessagesTemplateUseCase";
// import { count } from 'console'

const showTextModal = ref(false);
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

const checked = ref(false);
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
  saveMessage(result);
}
const state = reactive({
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
const { messages } = toRefs(state);

// left: 900px;
// top: 65px;
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
