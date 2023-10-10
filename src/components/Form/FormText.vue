<template>
  <!-- class="card" -->
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
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// import { count } from "console";
import EmojiPicker from "vue3-emoji-picker";

const props = defineProps({
  label: {
    type: String,
  },
  self: {
    type: Number,
  },
});
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

// Add other button click handlers as needed

// function addDatetimeToTextarea() {
//   const currentDate = new Date();
//   const formattedDatetime = currentDate.toLocaleString();
//   inputValueContent.value += formattedDatetime + "\n";
// }
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

// const showPopup = ref(false)
// const closePopup = () => {
//   showPopup.value = false
// }
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
