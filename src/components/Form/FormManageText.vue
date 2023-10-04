<template>
  <!-- class="card" -->
  <div class="container">
    <div class="card">
      <!-- {{ inputValueContent }} -->
      <p v-if="error" class="error-message">{{ error }}</p>
      <nav>
        <div class="textarea-box">
          <textarea
            class="textarea"
            ref="textInputRef"
            :placeholder="props.label"
            v-model="inputValueContent"
            @input="varidateText"
            @focus="onTextAreaFocus"
          />
        </div>
        <!-- Emoji -->
        <ul class="menu">
          <li>
            <a href="#" @click="onShowClose"
              ><i class="bi bi-emoji-laughing-fill cursor-pointer"></i
            ></a>
            <ul class="menu-popup">
              <li class="li-emoji">
                <a href="#" class="a-emoji">
                  <EmojiPicker
                    class="Emojipicker"
                    v-show="showEimoji"
                    @select="onSelectEmoji"
                /></a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- Btn -->
      <button
        class="btn_a m-2 w-20 h-6 bg-blue-500 cursor-pointer text-white hover:text-gray-900 hover:bg-red-400"
        @click="showFirstName"
      >
        $firstName
      </button>
      <button
        class="btn_a m-2 w-20 h-6 bg-yellow-500 cursor-pointer text-white hover:text-gray-900 hover:bg-red-400"
        @click="showTeam_A"
      >
        $teamA
      </button>
      <button
        class="btn_b m-2 w-20 h-6 bg-pink-500 cursor-pointer text-white hover:text-gray-900 hover:bg-yellow-500"
        @click="showTeam_B"
      >
        $teamB
      </button>

      <button
        class="btn_b m-2 w-20 h-6 bg-pink-900 cursor-pointer text-white hover:text-gray-900 hover:bg-red-600"
        @click="addDatetimeToTextarea"
      >
        $dateTime
      </button>
      <button
        class="btn_b m-2 w-20 h-6 bg-red-500 cursor-pointer text-white hover:text-gray-900 hover:bg-purple-500"
        @click="Clear_Data"
      >
        $clear
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, watchEffect } from "vue";
import textarea from "primevue/textarea";
// import { count } from "console";
import EmojiPicker from "vue3-emoji-picker";
import Textarea from "primevue/textarea";
type PropsType = {
  label: string;
  self: number;
};
const props = defineProps<PropsType>();
const textInputRef = ref<HTMLTextAreaElement>();
const showEimoji = ref(false);
const error = ref("");
const emits = defineEmits(["onSuccess"]);

function onSuccessSendMessage() {
  emits("onSuccess", {
    self: props.self,
    message: inputValueContent.value,
  });
}

function onShowClose() {
  showEimoji.value = !showEimoji.value;
}

const inputValueContent = ref("");

function showFirstName() {
  const dataFirstname = "$FirstName ";
  onChangeReplaceCurrentCursorFocus(dataFirstname);
}
function showTeam_A() {
  const dataTeam_A = "$Team_A ";
  onChangeReplaceCurrentCursorFocus(dataTeam_A);
}
function showTeam_B() {
  const dataTeam_B = "$Team_B ";
  onChangeReplaceCurrentCursorFocus(dataTeam_B);
}

// Add other button click handlers as needed

function addDatetimeToTextarea() {
  const currentDate = new Date();
  const formattedDatetime = currentDate.toLocaleString();
  inputValueContent.value += formattedDatetime + "\n";
}

function Clear_Data() {
  inputValueContent.value = "";
}

function onSelectEmoji(emoji: any) {
  const emoji_icon: string = emoji.i as string;
  onChangeReplaceCurrentCursorFocus(emoji_icon);
}

const rememberCursorPosition = ref(0);
const isHaveEvented = ref(false);

function onTextAreaFocus() {
  rememberCursorPosition.value = textInputRef.value?.selectionStart || 0;
  isHaveEvented.value = false;
}

function onChangeReplaceCurrentCursorFocus(_key_replace: string) {
  let cursor_current_position = textInputRef.value?.selectionStart || 0;
  if (isHaveEvented.value) {
    cursor_current_position = rememberCursorPosition.value;
  }

  const special_content = inputValueContent.value[cursor_current_position]
    ? inputValueContent.value[cursor_current_position]
    : "";
  inputValueContent.value =
    inputValueContent.value.substring(0, cursor_current_position) +
    _key_replace +
    special_content +
    inputValueContent.value.substring(cursor_current_position + 1);
  onSuccessSendMessage();
  if (!isHaveEvented.value) {
    rememberCursorPosition.value = cursor_current_position + _key_replace.length;
  } else {
    rememberCursorPosition.value += _key_replace.length;
  }
  isHaveEvented.value = true;
}

// varidate
const varidateText = () => {
  const content = inputValueContent.value;
  if (content.trim() === "") {
    error.value = "ກະລຸນາປ້ອນຂໍ້ຄວາມກ່ອນ";
  } else {
    error.value = "";
  }
};

// const showPopup = ref(false)
// const closePopup = () => {
//   showPopup.value = false
// }
</script>
<style scoped lang="scss">
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css");

/* textarea */
.textarea-with-icon {
  display: flex;
  align-items: center;
}

.textarea-with-icon i {
  font-size: 1.2rem; /* Adjust the size as needed */
  margin-right: 1px; /* Adjust the spacing as needed */
}

textarea {
  width: 100%;
  height: 100px;
  resize: none;
  font-size: 16px;
  padding: 10px;
  border: 1px solid black;
}

/* Text error */
.error-message {
  color: red;
  font-size: 16px;
}

nav {
  display: flex;
  justify-content: space-between;
  .textarea-box {
    width: 100%;
  }
  .textarea {
    width: 100%;
  }
}

.menu {
  list-style: none;
  position: relative;
  .li,
  a,
  i {
    color: #333;
    position: absolute;
    right: 12px;
    margin: 4px;
  }
}
.menu-popup {
  list-style: none;
  .li-emoji {
    .a-emoji {
      top: 60px;
    }
  }
}
</style>
