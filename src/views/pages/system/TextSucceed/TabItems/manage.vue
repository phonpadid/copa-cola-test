<template>
  <div class="card mt-4">
    <div class="mt-2" v-for="(message, index) in messages" :key="index">
      <span class="text-xl">* {{ message.label }}</span>
      <!-- :mode="false" -->
      <FormText
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
          <a-radio value="voted_participants">ສົ່ງຫາສະເພາະຄົນຮ່ວມເຊຍແມັດໃດໜຶ່ງ</a-radio>
          <a-radio value="participants_id"
            >ສົ່ງຫາສະເພາະຄົນທີທວຍຖືກເພືອຮັບລາງວັນ</a-radio
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
        <a-select
          class="w-[400px]"
          v-model:value="participants_id"
          v-show="selectedOption === 'participants_id'"
          mode="multiple"
          :options="participantsOptions"
          placeholder="ເລືອກຄົນທີທວຍຖືກເພື່ອຮັບລາງວັນ"
          v-model="selectedParticipants"
        />
        <br /><br />
        <a-button
          :loading="loading"
          type="primary"
          class="mx-4 hover:bg-red-500"
          @click="onHandleSave"
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
import { getAllParticipants } from "@/Repository/ParticipantRepository";
const loading = ref(false);
const showTextModal = ref(false);
const selectedOption = ref("all_participants");

const matchOptions = ref();
const matchResultOptions = ref();
const selectedMatchResult = ref(null);
const selectedMatch = ref(null);
const participantsOptions = ref();
const selectedParticipants = ref(null);

// Load List User name facebook
async function loadAllParticipants() {
  try {
    const res = await getAllParticipants();
    if (res) {
      participantsOptions.value = res.results.map((item) => ({
        value: item.id,
        label: item.facebook_name,
        ...item,
      }));
    }
  } catch (e) {
    console.log(e);
  }
}

// Load MatchResult
async function loadMatchTeam() {
  try {
    const res = await getAllMatchResult();
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
  await loadAllParticipants();
});

function showModal() {
  showTextModal.value = !showTextModal.value;
}

function Close() {
  showTextModal.value = false;
}

const formTextRef = ref(null);
async function onHandleSave() {
  loading.value = true;
  formTextRef.value[0].onSuccessSendMessage();
  const messageData = {
    condition: selectedOption.value,
    message: state.message,
    match_result_id: state.match_result_id,
    match_id: state.match_id,
    participants_id: state.participants_id,
  };
  try {
    // console.log(saveMessageSucceed(messageData));
    await saveMessageSucceed(messageData);
    showTextModal.value = !showTextModal.value;
    loading.value = false;
    // console.log("Message sent successfully");
  } catch (error) {
    console.error("Error sending message:", error);
  }
}

const state = reactive({
  match_id: null,
  match_result_id: null,
  participants_id: null,
  message: "",
  messages: [
    {
      self: 0,
      message: "",
      condition: "",
      label: "ຂໍ້ຄວາມສຳເລັດຮູບ ເພື່ອເລືອກສົ່ງຫາກຸ່ມຜູ້ຮ່ວມກິດຈະກຳ",
      match_result_id: null,
      match_id: null,
      participants_id: null,
    },
  ],

  selectedOption: "all_participants",
  matchResultOptions: [],
  matchOptions: [],
  participantsOptions: [],
});

function onSuccessSendMessage(e) {
  state.message = e.message;
}
const { messages, match_id, match_result_id, message, participants_id } = toRefs(state);
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
