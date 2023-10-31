<template>
  <div class="card mt-4">
    <div class="mt-2" v-for="(message, index) in messages" :key="index">
      <span class="text-xl">* {{ message.label }}</span>
      <FormManageText
        :mode="false"
        ref="formTextRef"
        :self="1"
        :key="`form-text-${index}`"
        @onSuccess="onSuccessSendMessage"
        :label="message.label"
        :message="message"
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
          <a-radio value="winning_participants">ສົົ່ງຫາສະະເພາະຜູ້ທີ່ເຄີຍທວຍຖືກ</a-radio>
          <a-radio value="voted_participants"
            >ສົ່ງຫາສະເພາະຄົນຮ່ວມເຊຍແມັດໃດໜຶ່ງ</a-radio
          > </a-radio-group
        ><br /><br />
        <!-- <p>ເລືອກເເມັດ</p> -->
        <a-select
          class="w-[400px]"
          v-model:value="match_result_id"
          v-show="selectedOption === 'winning_participants'"
          :options="matchResultOptions"
          placeholder="ສົົ່ງຫາສະະເພາະຜູ້ທີ່ເຄີຍທວຍຖືກໃນແມັດ"
          v-model="selectedMatchResult"
        />

        <a-select
          class="w-[400px]"
          v-model:value="match_id"
          v-show="selectedOption === 'voted_participants'"
          :options="matchOptions"
          placeholder="ສົ່ງຫາສະເພາະຄົນຮ່ວມເຊຍແມັດໃດໜຶ່ງ"
          v-model="selectedMatch"
        />
        <br /><br />
        <a-button type="primary" class="mx-4 hover:bg-red-500" @click="onHandleSave"
          >ສົົ່ງຂໍ້ມູນ</a-button
        >
      </a-modal>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted } from "vue";
import { saveMessageSucceed } from "@/usecases/MessagesSucceed/MessagesSuccedUseCases";
import { getAllMatchResult } from "@/Repository/MatchResultRepository";
import { getAllMatch } from "@/Repository/MatchRepository";

const showTextModal = ref(false);
const selectedOption = ref("all_participants");
// const selectedWinningParticipant = ref(null);
// const selectedVotedParticipant = ref(null);

const matchOptions = ref();
const matchResultOptions = ref();
const selectedMatchResult = ref(null); // Add a variable to store the selected match result
const selectedMatch = ref(null);

// Load MatchResult
async function loadMatchTeam() {
  try {
    const res = await getAllMatchResult();
    // console.log(res);
    if (res) {
      matchResultOptions.value = res.results.map((item) => ({
        value: item.id,
        label: `${item.match.team_a.name}(${item.match.team_a.code}) VS ${item.match.team_b.name}(${item.match.team_b.code})`,
        ...item,
      }));
    }
  } catch (e) {
    console.log(e);
  }
}
// Load Team
async function LoadTeam() {
  try {
    const res = await getAllMatch();
    // console.log(res);
    if (res) {
      matchOptions.value = res.results.map((item) => ({
        value: item.id,
        label: `${item.team_a.name}(${item.team_a.code}) VS ${item.team_b.name}(${item.team_b.code})`,
        ...item,
      }));
    }
  } catch (e) {}
}

onMounted(async () => {
  await loadMatchTeam();
  await LoadTeam();
});

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

const formTextRef = ref(null);
async function onHandleSave() {
  formTextRef.value[0].onSuccessSendMessage();
  const messageData = {
    condition: selectedOption.value,
    message: state.message,
    match_result_id: state.match_result_id,
    match_id: state.match_id,
  };
  try {
    await saveMessageSucceed(messageData);
    console.log("Message sent successfully");
  } catch (error) {
    console.error("Error sending message:", error);
  }
}

const state = reactive({
  match_id: null,
  match_result_id: null,
  message: "",
  messages: [
    {
      self: 0,
      message: "",
      condition: "",
      label: "ຂໍ້ຄວາມສຳເລັດຮູບ ເພື່ອເລືອກສົ່ງຫາກຸ່ມຜູ້ຮ່ວມກິດຈະກຳ",
      match_result_id: null,
      match_id: null,
    },
  ],
  selectedOption: "all_participants",
  matchResultOptions: [],
  matchOptions: [],
});

function onSuccessSendMessage(e) {
  state.message = e.message;
}
const { messages, match_id, match_result_id, message } = toRefs(state);
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
