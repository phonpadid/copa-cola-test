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
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, watchEffect, reactive, toRefs } from "vue";
// import { count } from 'console'
import FormManageText from "@/components/Form/FormManageText.vue";
const formTextRef = ref();
function onHandleSave() {
  for (let i = 0; i < formTextRef.value.length; i++) {
    formTextRef.value[i].onSuccessSendMessage();
    console.log(onHandleSave);
  }
  // for (const message in state.messages) {
  // }
  //
}
const state = reactive({
  messages: [
    { self: 0, message: "", label: "ຂໍ້ຄວາມເມື່ອລູກເພຈ ຄອມເມັ້ນເຊຍທີມ" },
    { self: 1, message: "", label: "ຂໍ້ຄວາມເມື່ອລູກເພຈ ຄອມເມັ້ນເຊຍທີມອີກຮອບ" },
    { self: 2, message: "", label: "ຂໍ້ຄວາມເມື່ອປະກາດຜົນການແຂ່ງຂັນ" },
    { self: 3, message: "", label: "ຂໍ້ຄວາມເມື່ອລູກເພຈຄອມເມ້ນມາຕອນປິດໂຫວດແລ້ວ" },
    {
      self: 4,
      message: "",
      label: "ຂໍ້ຄວາມສຳເລັດຮູບ ເພື່ອເລືອກສົ່ງຫາກຸ່ມຜູ້ຮ່ວມກິດຈະກຳ",
    },
  ],
});
type SendMessageI = {
  self: number;
  message: string;
};
function onSuccessSendMessage(e: SendMessageI) {
  state.messages[e.self].message = e.message;
}
// import Textarea from 'primevue/textarea';
// Define your data properties
// const textInputRef = ref<HTMLTextAreaElement>()
// const showEimoji = ref(false)
// const error = ref('')

// function onShowClose() {
//   showEimoji.value = !showEimoji.value
// }

// const inputValueContent = ref('ຂໍ້ຄວາມເມື່ອລູກເພຈ ຄອມເມັ້ນເຊີຍທີມ👉 ')

// const showFirstName = () => {
//   const dataFirstname = '$FirstName '
//   onChangeReplaceCurrentCursorFocus(dataFirstname)
// }
// const showTeam_A = () => {
//   const dataToShow = 'TeamA VS '
//   onChangeReplaceCurrentCursorFocus(dataToShow)
// }
// const showTeam_B = () => {
//   const dataToAdd = 'Team_B '
//   onChangeReplaceCurrentCursorFocus(dataToAdd)
// }
// DateTime
// const addDatetimeToTextarea = () => {
//   const currentDate = new Date()
// const formattedDatetime = currentDate.toLocaleString()
// Format as desired
// inputValueContent.value += formattedDatetime + '\n'
// Add datetime to textarea
// }
// Clear
// const Clear_Data = () => {
//   inputValueContent.value = ''
// }

// function onSelectEmoji(emoji: any) {
//   const emoji_icon: string = emoji.i as string
//   onChangeReplaceCurrentCursorFocus(emoji_icon)
// }
// const rememberCursorPoistion = ref(0)
// const isHaveEvented = ref(false)
// function onTextAreaFocus() {
//   rememberCursorPoistion.value = textInputRef.value.selectionStart
//   isHaveEvented.value = false
// }
// function onChangeReplaceCurrentCursorFocus(_key_replace: string) {
//   let cursor_cuurent_position = textInputRef.value.selectionStart
//   if (isHaveEvented.value) {
//     cursor_cuurent_position = rememberCursorPoistion.value
//   }

//   const speacial_content = inputValueContent.value[cursor_cuurent_position]
//     ? inputValueContent.value[cursor_cuurent_position]
//     : ''
//   inputValueContent.value =
//     inputValueContent.value.substring(0, cursor_cuurent_position) +
//     _key_replace +
//     speacial_content +
//     inputValueContent.value.substring(cursor_cuurent_position + 1)
//   if (!isHaveEvented.value) {
//     rememberCursorPoistion.value = cursor_cuurent_position + _key_replace.length
//   } else {
//     rememberCursorPoistion.value = rememberCursorPoistion.value + _key_replace.length
//   }
//   isHaveEvented.value = true
// }

// varidate
// const varidateText = () => {
//   const content = inputValueContent.value
//   if (content.trim() === '') {
//     error.value = 'ກະລຸນາປ້ອນຂໍ້ຄວາມກ່ອນ'
//   } else {
//     error.value = ''
//   }
// }

// const showPopup = ref(false)

// const closePopup = () => {
//   showPopup.value = false
// }
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
