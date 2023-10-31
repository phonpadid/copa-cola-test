<template>
  <div class="base-form">
    <div class="form-content">
      <AlertMessage v-if="isServerError" :messageError="messageError" />
      <a-form v-bind="layout" :rules="rules" ref="refForm" :model="form">
        <a-form-item label=" ">
          <h1 class="text-xl base-title-form">
            <span><i class="fal fa-edit"></i></span>
            {{ isEdit === true ? "ແກ້ໄຂ້ຂໍ້ມູນແມັດ" : "ເພີ່ມຂໍ້ມູນແມັດ" }}
          </h1>
        </a-form-item>
        <a-form-item label="ຊືທີມA" name="team_a">
          <a-select type="team_a" :options="team" v-model:value="form.team_a" />
        </a-form-item>
        <a-form-item label="ຊືທີມB" name="team_b">
          <a-select type="team_b" :options="team" v-model:value="form.team_b" />
        </a-form-item>
        <a-form-item label="ເວລາແຂ່ງ" name="match_time">
          <a-date-picker type="match_time" v-model:value="form.match_time" show-time />
        </a-form-item>
        <a-form-item label="ວັນສິ້ນສຸດ" name="match_end_activity_time">
          <a-date-picker
            type="match_end_activity_time"
            show-time
            v-model:value="form.match_end_activity_time"
          />
        </a-form-item>
        <a-form-item label="ສະຖານະ">
          <a-checkbox type="checkbox" v-model:checked="form.is_enable">
            <p>{{ form.is_enable ? "ເປີດໂຫວດ" : "ປິດໂຫວດ" }}</p>
          </a-checkbox>
          <!-- <P>{{ form.is_enable ? "ເປີດໂຫວດ" : "ປິດໂຫວດ" }}</P> -->
        </a-form-item>
        <!-- <a-form-item v-if="!isEdit" label="ຍືນຍັນລະຫັດຜ່ານ">
      <a-input-password v-model:value="form.password_confirmation"/>
    </a-form-item> -->
        <a-form-item label="">
          <a-button class="bg-blue-500 btn" type="primary" @click="handleSubmit(id)">
            {{ isEdit === true ? "ແກ້ໄຂຂໍ້ມູນ" : "ບັນທຶກຂໍ້ມູນ" }}
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeMount, computed } from "vue";
import { useRoute } from "vue-router";
import MatchUseCase from "@/usecases/match/matchUaseCase";
import { getAllTeam } from "../../../../../Repository/TeamRepository";

const checked = ref(false);
const route = useRoute();
const id = computed(() => (route.name === "match.edit" ? route.params.id : null));

const {
  layout,
  form,
  rules,
  refForm,
  isEdit,
  handleSubmit,
  messageError,
  isServerError,
  loadMatch,
} = MatchUseCase;

const team = ref();
async function loadAllTeam() {
  try {
    const res = await getAllTeam();
    if (res) {
      team.value = res.results.map((item) => ({
        value: item.id,
        label: item.name,
        ...item,
      }));
    }
  } catch (e) {}
}

onBeforeMount(() => {
  isServerError.value = false;
});

onMounted(async () => {
  const id = route.params.id;
  if (id) {
    isEdit.value = true;
    await loadMatch(id);
  }
  loadAllTeam();
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
