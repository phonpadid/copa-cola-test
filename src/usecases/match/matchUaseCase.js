import { reactive, toRefs, ref } from "vue";
import {
  getAllMatch,
  getMatch,
  createMatch,
  updateMatch,
  deleteMatch,
} from "@/Repository/MatchRepository";
import MatchModel from "@/store/models/Matches";
import { notificationSuccess, notificationWarning } from "@/hooks/message";
import router from "@/router";
import dayjs from "dayjs";

const data = reactive({
  isEdit: false,
  matches: [],
  form: new MatchModel(),
  messageError: {},
  isServerError: false,
  rules: {
    team_a: [
      {
        required: true,
        message: ["ກະລຸນາປ້ອນເລືອກທີມກ່ອນ"],
      },
    ],
    team_b: [
      {
        required: true,
        message: ["ກະລຖນາເລືອກທີມກ່ອນ"],
      },
    ],
    match_time: [
      {
        required: true,
        message: ["ກະລຸນາເລືອກວັນທີກ່ອນ"],
      },
    ],
    match_end_activity_time: [
      {
        required: true,
        message: ["ກະລຸນາເລືອກວັນທີກ່ອນ"],
      },
    ],
  },
});
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 14,
  },
};
//validate
const refForm = ref(null);

async function resetForm() {
  // refForm.value.resetFields();
  data.form.team_a = null;
  data.form.team_b = null;
  data.form.match_time = null;
  data.form.match_end_activity_time = null;
  data.form.is_enable = null;
}
async function submitForm(id) {
  if (!data.isEdit) {
    try {
      const res = await createMatch(data.form);
      if (res) {
        notificationSuccess({
          title: "ບັນທຶກຂໍ້ມູນສຳເລັດ",
          description: "ບັນທຶກຂໍ້ມູນສຳເລັດແລ້ວ",
          position: "topRight",
        });
        router.push({ name: "match.index" }).catch(() => {});
        await resetForm();
      }
    } catch (firstErrorBag) {
      data.isLoading = false;
      data.isServerError = true;
      data.messageError = Object.values(firstErrorBag.response.data.errors).join(
        "<br>" + " -"
      );
      notificationWarning({
        title: "ເກີດຂໍ້ຜິດພາດ...",
        description: "ກະລຸນາກວດສອບຂໍ້ມູນ",
        position: "topRight",
      });
    }
  }
  if (data.isEdit) {
    try {
      const res = await updateMatch(id, data.form);
      if (res) {
        notificationSuccess({
          title: "ອັບເດດຂໍ້ມູນສຳເລັດ",
          description: "ອັບເດດຂໍ້ມູນສຳເລັດແລ້ວ...",
          position: "topRight",
        });
        await resetForm();
        router.push({ name: "match.index" }).catch(() => {});
      }
    } catch (firstErrorBag) {
      console.log(firstErrorBag);
      data.isServerError = true;
      data.messageError = Object.values(firstErrorBag.response.data.errors).join(
        "<br/>" + "  -"
      );
      notificationWarning({
        title: "ເກີດຂໍ້ຜິດພາດ...",
        description: "ກະລຸນາກວດສອບຂໍ້ມູນ",
        position: "topRight",
      });
    }
  }
}
// Function Timezone
function formatDateWithTimeZone(dateWithTimeZone) {
  if (typeof dateWithTimeZone !== "string") return null;
  const formatDateWithTimeZone = dayjs(dateWithTimeZone, "YYYY-MM-DD HH:mm:ss", "UTC");

  return dayjs(formatDateWithTimeZone).format("YYYY-MM-DD HH:mm:ss");
}
async function loadAllMatch() {
  try {
    const res = await getAllMatch();
    if (res) {
      // Format datetime
      data.matches = res.results.map((match) => ({
        ...match,
        match_time: formatDateWithTimeZone(match.match_time),
        match_end_activity_time: formatDateWithTimeZone(match.match_end_activity_time),
      }));
      // console.log(data.matches)
    }
  } catch (error) {}
}

async function loadMatch(id) {
  try {
    const res = await getMatch(id);
    if (res) {
      res.match_time = dayjs(res.match_time,"YYYY-MM-DD HH:mm:ss",'Asia/Bangkok')
      res.match_end_activity_time =dayjs(res.match_end_activity_time,"YYYY-MM-DD HH:mm:ss",'Asia/Bangkok')
      res.team_a = res.team_a.id;
      res.team_b = res.team_b.id;
      data.form.fromJSON(data.form, res);
    }
  } catch (error) {
    console.log(error);
  }
}

async function handleSubmit(id) {
  refForm.value.validate().then(() => {
    submitForm(id);
  });
}

async function onCreate() {
  await resetForm();
  data.isEdit = false;
  router
    .push({
      name: "match.create",
    })
    .catch(() => {});
}

function onEdit(id) {
  data.isEdit = true;
  router
    .push({
      name: "match.edit",
      params: {
        id: id,
      },
      query: {
        edit: "true",
      },
    })
    .catch((error) => {
      console.log(error);
    });
}

// Delete
async function onDelete(id) {
  try {
    const res = await deleteMatch(id);
    if (res) {
      notificationSuccess({
        title: "ລຶບຂໍ້ມູນສຳເລັດ...",
        description: "ລຶບຂໍ້ມູນສຳເລັດແລ້ວ",
        position: "topRight",
      });
    }
    await loadAllMatch();
  } catch (firstErrorBag) {
    data.isLoading = false;
    notificationWarning({
      title: "ເກີດຂໍ້ຜິດພາດ...",
      description: firstErrorBag.errors.join("\n"),
      position: "topRight",
    });
  }
}

export default {
  ...toRefs(data),
  onCreate,
  onDelete,
  onEdit,
  refForm,
  handleSubmit,
  loadMatch,
  loadAllMatch,
  layout,
};
