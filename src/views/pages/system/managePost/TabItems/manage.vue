<template>
  <div class="base-form">
    <div class="form-content">
      <AlertMessage v-if="isServerError" :messageError="messageError" />
      <a-form v-bind="layout" :rules="rules" ref="refForm" :model="form">
        <a-form-item label=" ">
          <h1 class="text-xl base-title-form font-bold">
            <span><i class="fal fa-edit"></i></span>
            {{
              isEdit === true
                ? "ແກ້ຂໍ້ມູນໂພສ  ແລະ ຈັບຄູ່ແມັດ "
                : "ເພີ່ມຂໍ້ມູນໂພສ  ແລະ ຈັບຄູ່ແມັດ"
            }}
          </h1>
        </a-form-item>
        <a-form-item label="ໂພສເຟສບຸກ" name="facebook_post_id">
          <a-select v-model:value="form.facebook_post_id" :options="facebookPost" />
        </a-form-item>
        <!-- <a-form-item label="Title" name="title">
          <a-select v-model:value="form.title" :options="messageFacebookPost" />
        </a-form-item> -->
        <a-form-item label="ຄຳອະທິບາຍ" name="body">
          <a-input v-model:value="form.body" />
        </a-form-item>
        <a-form-item label="ເລືອກແມັດ" name="match">
          <a-select v-model:value="form.match" :options="matchTeam" />
        </a-form-item>
        <a-form-item label="is_enable">
          <a-checkbox v-model:checked="form.is_enable">
            <p>{{ form.is_enable ? "ເປີດໂຫວດ" : "ປິດໂຫວດ" }}</p>
          </a-checkbox>
        </a-form-item>
        <a-form-item label="">
          <a-button
            class="bg-blue-500 btn"
            type="primary"
            @click="handleSubmit(facebookPost)"
          >
            {{ isEdit === true ? "ແກ້ໄຂຂໍ້ມູນ" : "ບັນທຶກຂໍ້ມູນ" }}
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import ManagePostUasecase from "@/usecases/managePost/managePostUasecase";
import { getAllMatch } from "@/Repository/MatchRepository";
import { getFacebookPost } from "@/Repository/PostRepository";
const route = useRoute();
// const id = computed(() => (route.name === "manageposts.edit" ? route.params.id : null));
const {
  layout,
  form,
  rules,
  refForm,
  isEdit,
  handleSubmit,
  messageError,
  isServerError,
  loadPost,
} = ManagePostUasecase;

const checked = ref(false);
onBeforeMount(() => {
  isServerError.value = false;
});

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

const facebookPost = ref();
const messageFacebookPost = ref();
async function loadFacebookPost() {
  try {
    const TOKEN_DEFAULT_VALUE =
      "EAAFLdEq08iYBO5en3l4DVKUvETZC69OItDAFFZAs0VvpZC1dzuUBym9us11otgPDdLfYTekAYFGrWh3qhWA73xxVCqsfXOPDOihqQDqsuhRZBHImxtjZAdMWQKyBNEv8AmkE4BDEuEe4oD91hIJgHMuVNRe6ypMljH2TAElwZC1wHBt9dG1N9Sfkp4VcrBTSDtkIg8kBlF1N8tifmF";
    const filters = {
      fields: "id,message,created_time,comments.limit(0).summary(true),attachments{type}",
      access_token: TOKEN_DEFAULT_VALUE,
    };
    const res = await getFacebookPost(filters);
    // console.log(res.data, 9999);
    if (res) {
      facebookPost.value = res.data.map((item) => ({
        value: item.id,
        label: `${item.message} - (${item.comments.summary.total_count})`,
        ...item,
      }));
      if (res) {
        messageFacebookPost.value = res.data.map((item) => ({
          value: item.message,
          label: item.message,
        }));
      }
    }
  } catch (e) {
    console.log(e);
  }
}

onMounted(async () => {
  const id = route.params.id;
  // console.log(id);
  if (id) {
    isEdit.value = true;
    await loadPost(id);
  }
  loadMatchTeam();
  loadFacebookPost();
  // loadMessageFacebookPost();
});
// Varidate Form
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
