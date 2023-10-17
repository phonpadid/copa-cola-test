<template>
  <div class="card  grid   grid-cols-1 mt-4">
    <Suspense>
    <div class="mt-2" v-for="(message, index) in messages" :key="index">
      <span class="text-xl font-bold">* {{ message.label }}</span>
      
      <!-- component with nested async dependencies -->
      <AsyncFormManageText
        ref="formTextRef"
        :self="message.id"
        :message="message.message"
        :key="`form-text-${index}`"
        @onSuccess="onSuccessSendMessage"
        :label="message.label"
      />

     
     
    </div>
    
     <!-- loading state via #fallback slot -->
      <template #fallback>
        <div class="flex items-center justify-center h-screen">
          <div class="w-16 h-16 border-t-4 border-gray-400 border-solid rounded-full animate-spin"></div>
      </div>

      </template>
    </Suspense>
    <!-- <a-switch v-model:checked="checked" /> -->
    <a-button  label="Save" @click="onHandleSave" 
    class="m-2 w-[200px]" type="primary"
      >{{ isUpdate ? "ແກ້ໄຂຂໍ້ມູນ" : "ບັນທຶກຂໍ້ມູນ"}}</a-button
    >
    <!-- <a-button label="Update" @click="onHandleSave" class="m-2" type="primary"
      >update</a-button
    > -->
  </div>
</template>

<script setup>
import { ref, reactive, toRefs , defineAsyncComponent } from "vue";
import MessagesTemplateUseCase from "@/usecases/Messages/MessagesTemplateUseCase";
import { onMounted } from "vue";
// import FormManageText from "@/components/Form/FormManageText";
const AsyncFormManageText = defineAsyncComponent(() => {return import("@/components/Form/FormManageText")})
const { saveMessage, loadAllMessages,EditMessage } = MessagesTemplateUseCase;
// import FormManageText from "@/components/Form/FormManageText.vue";
const formTextRef = ref();
function onHandleSave() {
  for (let i = 0; i < formTextRef.value.length; i++) {
    formTextRef.value[i].onSuccessSendMessage();
  }
  if(state.isUpdate) {
    const result = state.messages.map((message) => ({
        id:message.id,
        condition: message.condition,
        value: message.message,
        is_enable: message.is_enable,
      }));
     
      EditMessage(result)
  }else{
    const result = state.messages.map((message) => ({
        condition: message.condition,
        value: message.message,
        is_enable: message.is_enable,
      }));
    saveMessage(result);
  }
}
const state = reactive({
  isUpdate:false,
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
  
  if(messages.length <= 1){
    state.isUpdate = false
    return false
  }
  messages.length = 4
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
  state.isUpdate = true
  // console.log(state.messages);
}
function onSuccessSendMessage(e) {
  const indexOfMessage = state.messages.findIndex(message => e.self === message.id);
  
  if(indexOfMessage !== -1){

    state.messages[indexOfMessage].message = e.message;
  }
}
const { messages , isUpdate } = toRefs(state);
onMounted(() => {
  
  replaceMessages();
});
</script>
<style scoped lang="scss"></style>
