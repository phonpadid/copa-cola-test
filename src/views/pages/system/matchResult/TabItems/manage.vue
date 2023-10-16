<template>
  <div class="base-form">
    <div class="form-content">
      <!-- <AlertMessage v-if="isServerError" :messageError="messageError" /> -->
      <a-form v-bind="layout" :rules="rules" ref="refForm" :model="form">
        <a-form-item label=" ">
          <h1 class="text-xl base-title-form font-bold">
            <span><i class="fal fa-edit font-bold"></i></span>
            {{ isEdit === true ? "ແກ້ໄຂ້ຂໍ້ມູນແມັດResult" : "ເພີ່ມຂໍ້ມູນແມັດResult" }}
          </h1>
        </a-form-item>

        <a-form-item label="ແມັດ" name="match">
          <a-select :options="matchTeam" v-model:value="form.match" />
        </a-form-item>
        <a-form-item label="ຄະແນນທີມA" name="team_a_score">
          <a-input-number
            :min="1"
            :max="100000"
            v-model:value="form.team_a_score"
            style="width: 200px"
          />
        </a-form-item>
        <a-form-item label="ຄະແນນທີມB" name="team_b_score">
          <a-input-number
            :min="1"
            :max="100000"
            v-model:value="form.team_b_score"
            style="width: 200px"
          />
        </a-form-item>
        <a-form-item label="ສະຖານະ">
          <a-checkbox v-model:checked="form.is_publish">
            <p>{{ form.is_publish ? "ເປີດໂຫວດ" : "ປິດໂຫວດ" }}</p>
          </a-checkbox>
        </a-form-item>
        <a-form-item label="">
          <a-button class="bg-blue-500 btn" type="primary" @click="handleSubmit">
            {{ isEdit === true ? "ແກ້ໄຂຂໍ້ມູນ" : "ບັນທຶກຂໍ້ມູນ" }}
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup>
import {
  onMounted,
  ref,
  onBeforeMount,
  defineProps,
  defineEmits,
  toRefs,
  computed,
} from "vue";
import { useRoute } from "vue-router";
import MatchResultUaseCase from "@/usecases/matchResult/matchResultUaseCase";
import { getAllMatch } from "@/Repository/MatchRepository";
const route = useRoute();

const checked = ref(false);

// const id = computed(() => (route.name === "matchresult.edit" ? route.params.id : null));

// const switchText = computed(() => (checked.value ? "ເປີດ" : "ປິດ"));

const {
  layout,
  form,
  rules,
  refForm,
  isEdit,
  handleSubmit,
  messageError,
  isServerError,
  loadMatchResult,
} = MatchResultUaseCase;

const matchTeam = ref();
async function loadMatchTeam() {
  try {
    const res = await getAllMatch();
    // console.log(res);
    if (res) {
      matchTeam.value = res.results.map((item) => ({
        value: item.id,
        label: `${item.team_a.name} VS ${item.team_b.name}`,
        ...item,
      }));
    }
  } catch (e) {
    console.log(e);
  }
}

onBeforeMount(() => {
  isServerError.value = false;
});

onMounted(async () => {
  const id = route.params.id;
  if (id) {
    isEdit.value = true;
    await loadMatchResult(id);
  }
  loadMatchTeam();
});
</script>

<style scoped>
/* Base styles for larger screens */
.base-form {
  max-width: 600px;
  margin: 0 auto;
}

/* Responsive styles for smaller screens (e.g., tablets and mobile) */
@media screen and (max-width: 768px) {
  .base-form {
    max-width: 100%;
    padding: 20px; /* Add spacing for smaller screens */
  }

  /* Adjust the button margin for smaller screens */
  .btn {
    margin-left: 0; /* Reset the margin */
    margin-top: 20px; /* Add top margin for spacing */
  }
}

/* Styles for even smaller screens (e.g., mobile phones) */
@media screen and (max-width: 480px) {
  /* Further adjustments for smaller screens if needed */
}
</style>
