<template>
  <!-- class="card" -->
  <div class="card mt-4">
    <!-- {{ inputValueContent }} -->
    <!-- <p v-if="error" class="error-message">{{ error }}</p> -->
    <!-- <nav>
      <div class="textarea-box">
        <textarea
          class="textarea"
          ref="textInputRef"
          v-model="inputValueContent"
          @input="varidateText"
          @focus="onTextAreaFocus"
        />
      </div> -->
    <!-- Emoji -->
    <!-- <ul class="menu">
        <li>
          <a href="#" @click="onShowClose"
            ><i class="bi bi-emoji-laughing-fill cursor-pointer"></i
          ></a>
          <ul class="menu-popup">
            <li class="li-emoji">
              <a href="#" class="a-emoji"
                ><EmojiPicker class="Emojipicker" v-show="showEimoji" @select="onSelectEmoji"
              /></a>
            </li>
          </ul>
        </li>
      </ul>
    </nav> -->
    <!-- Btn -->
    <!-- <button
      class="btn_a m-2 bg-primary cursor-pointer text-white hover:text-gray-900 hover:bg-red-400"
      @click="showFirstName"
    >
      $firstName
    </button>
    <button
      class="btn_a m-2 bg-primary cursor-pointer text-white hover:text-gray-900 hover:bg-red-400"
      @click="showTeam_A"
    >
      $teamA
    </button>
    <button
      class="btn_b m-2 bg-pink-500 cursor-pointer text-white hover:text-gray-900 hover:bg-yellow-500"
      @click="showTeam_B"
    >
      $teamB
    </button>

    <button
      class="btn_b m-2 bg-pink-900 cursor-pointer text-white hover:text-gray-900 hover:bg-red-600"
      @click="addDatetimeToTextarea"
    >
      $dateTime
    </button>
    <button
      class="btn_b m-2 bg-red-500 cursor-pointer text-white hover:text-gray-900 hover:bg-purple-500"
      @click="Clear_Data"
    >
      $clear
    </button> -->
    <div class="mt-2" v-for="(message, index) in messages" :key="index">
      <span class="text-xl">* {{ message.label }}</span>
      <FormManageText
        ref="formTextRef"
        :self="message.self"
        :key="`form-text-${index}`"
        @onSuccess="onSuccessSendMessage"
        :label="message.label"
      />
    </div>
    <!-- <div class="mt-8">
      <span class="text-xl">* ຂໍ້ຄວາມເມື່ອລູກເພຈ ຄອມເມັ້ນເຊີຍທີມອີກຮອບ</span>
      <FormText ref="formTextRef" @onSuccess="onSuccessSendMessage" label="ຂໍ້ຄວາມເມື່ອລູກເພຈ ຄອມເມັ້ນເຊີຍທີມອີກຮອບ" />
    </div>

    <div class="mt-8">
      <span class="text-xl">* ຂໍ້ຄວາມເມື່ອປະກາດຜົນການແຂ່ງຂັນ</span>
      <FormText ref="formTextRef" @onSuccess="onSuccessSendMessage" label="ຂໍ້ຄວາມເມື່ອປະກາດຜົນການແຂ່ງຂັນ" />
    </div>

    <div class="mt-8">
      <span class="text-xl">* ຂໍ້ຄວາມເມື່ອລູກເພຈຄອມເມ້ນມາຕອນປິດໂຫວດແລ້ວ</span>
      <FormText ref="formTextRef" @onSuccess="onSuccessSendMessage" label="ຂໍ້ຄວາມເມື່ອລູກເພຈຄອມເມ້ນມາຕອນປິດໂຫວດແລ້ວ" />
    </div>

    <div class="mt-8">
      <span
      class="text-xl"
        >* ຂໍ້ຄວາມສຳເລັດຮູບ ເພື່ອເລືອກສົ່ງຫາກຸ່ມຜູ້ຮ່ວມກິດຈະກຳ (ເຊັ່ນ: ທຸກຄົນ,
        ຊະເພາະຜູ້ທີ່ເຄີຍທວຍຖືກ, ຊະເພາະຜູ້ທີ່ຮ່ວມທວຍໃນແມຊໃດນຶ່ງ)</span
      >
      <FormText ref="formTextRef" @onSuccess="onSuccessSendMessage" label="ຂໍ້ຄວາມສຳເລັດຮູບ ເພື່ອເລືອກສົ່ງຫາກຸ່ມຜູ້ຮ່ວມກິດຈະກຳ" />
    </div> -->
    <!-- <Button label="Save" @click="onHandleSave" class="m-2" /> -->
    <a-button label="Save" @click="onHandleSave" class="m-2" type="primary"
      >Save</a-button
    >
    <a-button label="Update" @click="onHandleSave" class="m-2" type="primary"
      >update</a-button
    >
  </div>
</template>

<script setup>
import { ref, nextTick, watchEffect, reactive, toRefs } from "vue";
import { saveMessage } from "@/usecases/Messages/MessagesTemplateUseCase";
// import { count } from 'console'

// import FormManageText from "@/components/Form/FormManageText.vue";
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
      label: "ຂໍ້ຄວາມເມື່ອລູກເພຈ ຄອມເມັ້ນເຊຍທີມ",
      is_enable: true,
      condition: "condition_one",
    },
    {
      self: 1,
      message: "",
      condition: "condition_two",
      label: "ຂໍ້ຄວາມເມື່ອລູກເພຈ ຄອມເມັ້ນເຊຍທີມອີກຮອບ",
      is_enable: true,
    },
    {
      self: 2,
      message: "",
      label: "ຂໍ້ຄວາມເມື່ອປະກາດຜົນການແຂ່ງຂັນ",
      condition: "condition_three",
      is_enable: true,
    },
    {
      self: 3,
      message: "",
      label: "ຂໍ້ຄວາມເມື່ອລູກເພຈຄອມເມ້ນມາຕອນປິດໂຫວດແລ້ວ",
      is_enable: true,
      condition: "condition_four",
    },
  ],
});

function onSuccessSendMessage(e) {
  state.messages[e.self].message = e.message;
}
const { messages } = toRefs(state);
</script>
<style scoped lang="scss">
//@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css');
// /* textarea */
// .textarea-with-icon {
//   display: flex;
//   align-items: center;
// }

// .textarea-with-icon i {
//   font-size: 1.2rem; /* Adjust the size as needed */
//   margin-right: 10px; /* Adjust the spacing as needed */
// }

// textarea {
//   width: 100%;
//   height: 100px;
//   resize: none;
//   font-size: 16px;
//   padding: 10px;
// }
/* Emoji */
/* .head-emoji{
  position: absolute;
  outline: 1px solid red;
} */

// .Emojipicker {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
//   left: 50px;
// }

/* Text error */
// .error-message {
//   color: red;
//   font-size: 16px;
// }

// nav {
//   display: flex;
//   justify-content: space-between;
//   .textarea-box {
//     width: 100%;
//   }
//   .textarea {
//     width: 105%;
//   }
// }

// .menu {
//   list-style: none;
//   position: relative;
//   .li,
//   a,
//   i {
//     color: #333;
//     position: absolute;
//     right: 12px;
//     margin: 4px;
//   }
// }
// .menu-popup {
//   list-style: none;
//   .li-emoji {
//     .a-emoji {
//       top: 60px;
//     }
//   }
// }
</style>
