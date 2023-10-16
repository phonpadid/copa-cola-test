<template>
  <div class="card mt-4">
    <div class="mt-2" v-for="(message, index) in messages" :key="index">
      <span class="text-xl">* {{ message.label }}</span>
      <FormManageText
        ref="formTextRef"
        :self="message.id"
        :message="message.message"
        :key="`form-text-${index}`"
        @onSuccess="onSuccessSendMessage"
        :label="message.label"
      />
    </div>
    <!-- <a-switch v-model:checked="checked" /> -->
    <a-button label="Save" @click="onHandleSave" class="m-2" type="primary"
      >Save</a-button
    >
    <!-- <a-button label="Update" @click="onHandleSave" class="m-2" type="primary"
      >update</a-button
    > -->
  </div>
</template>

<script setup>
import { ref, reactive, toRefs } from "vue";
import MessagesTemplateUseCase from "@/usecases/Messages/MessagesTemplateUseCase";
import { onMounted } from "vue";

const { saveMessage, loadAllMessages } = MessagesTemplateUseCase;
// import FormManageText from "@/components/Form/FormManageText.vue";
const formTextRef = ref();
function onHandleSave() {
  for (let i = 0; i < formTextRef.value.length; i++) {
    formTextRef.value[i].onSuccessSendMessage();
  }
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
      id: 0,
      message: "",
      label: "ຂໍ້ຄວາມເມື່ອລູກເພຈ ຄອມເມັ້ນເຊຍທີມ",
      is_enable: true,
      condition: "condition_one",
    },
    {
      id: 1,
      message: "",
      label: "ຂໍ້ຄວາມເມື່ອລູກເພຈ ຄອມເມັ້ນເຊຍທີມອີກຮອບ",
      is_enable: true,
      condition: "condition_two",
    },
    {
      id: 2,
      message: "",
      label: "ຂໍ້ຄວາມເມື່ອປະກາດຜົນການແຂ່ງຂັນ",
      condition: "condition_three",
      is_enable: true,
    },
    {
      id: 3,
      message: "",
      label: "ຂໍ້ຄວາມເມື່ອລູກເພຈຄອມເມ້ນມາຕອນປິດໂຫວດແລ້ວ",
      is_enable: true,
      condition: "condition_four",
    },
  ],
});
async function replaceMessages() {
  const messages = await loadAllMessages();
  // console.log(messages);
  for (const message of messages) {
    const IndexStateMessage = state.messages.findIndex(
      (state_message) => state_message.condition === message.condition
    );
    if (IndexStateMessage !== -1) {
      state.messages[IndexStateMessage].is_enable = message.is_enable;
      state.messages[IndexStateMessage].message = message.value;
      state.messages[IndexStateMessage].id = message.id;
    }
  }
  // console.log(state.messages);
}
function onSuccessSendMessage(e) {
  state.messages[e.self].message = e.message;
}
const { messages } = toRefs(state);
onMounted(() => {
  loadAllMessages();
  replaceMessages();
});
</script>
<style scoped lang="scss"></style>
