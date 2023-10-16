<template>
  <div class="container">
    <div class="card">
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
        <p v-if="error" class="error-message">{{ error }}</p>
        <div class="emojo-open">
          <a href="#" @click="onShowClose"
            ><i class="bi bi-emoji-laughing-fill cursor-pointer"></i
          ></a>
        </div>
        <EmojiPicker
          class="EmojipickerClass"
          v-show="showEimoji"
          @select="onSelectEmoji"
        />
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
        @click="showTeam_Datetime"
      >
        $dateTime
      </button>
      <button
        class="btn_b m-2 w-20 h-6 bg-pink-600 cursor-pointer text-white hover:text-gray-900 hover:bg-red-900"
        @click="show_Team"
      >
        $team
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
const props = defineProps({
  label: {
    type: String,
  },
  self: {
    type: Number,
  },
  message: {
    type: String,
  },
});
watch(
  () => props.message,
  (newVl) => {
    inputValueContent.value = newVl;
  }
);
const textInputRef = ref();
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
  const dataFirstname = "$firstname ";
  onChangeReplaceCurrentCursorFocus(dataFirstname);
}
function showTeam_A() {
  const dataTeam_A = "$team_a vs ";
  onChangeReplaceCurrentCursorFocus(dataTeam_A);
}
function showTeam_B() {
  const dataTeam_B = "$team_b ";
  onChangeReplaceCurrentCursorFocus(dataTeam_B);
}
function showTeam_Datetime() {
  const data_datetime = "$datetime ";
  onChangeReplaceCurrentCursorFocus(data_datetime);
}
function show_Team() {
  const data_team = "$team ";
  onChangeReplaceCurrentCursorFocus(data_team);
}

function Clear_Data() {
  inputValueContent.value = "";
}

function onSelectEmoji(emoji) {
  const emoji_icon = emoji.i;
  onChangeReplaceCurrentCursorFocus(emoji_icon);
}

const rememberCursorPosition = ref(0);
const isHaveEvented = ref(false);

function onTextAreaFocus() {
  rememberCursorPosition.value = textInputRef.value?.selectionStart || 0;
  isHaveEvented.value = false;
}

function onChangeReplaceCurrentCursorFocus(_key_replace) {
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

defineExpose({
  onSuccessSendMessage,
});
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
  //display: flex;
  position: relative;
  //justify-content: space-between;
  .textarea-box {
    width: 100%;
  }
  .textarea {
    width: 100%;
  }
}

.menu {
  list-style: none;
  display: none;
  //.li,
  //a,
}
.emojo-open {
  position: absolute;
  top: 4px;
  right: 4px;
}
.EmojipickerClass {
  position: absolute;
  top: 24px;
  right: 4px;
  z-index: 10;
}
.menu-popup {
  list-style: none;
  //.li-emoji {
  //  .a-emoji {
  //    top: 60px;
  //  }
  //}
}
</style>
