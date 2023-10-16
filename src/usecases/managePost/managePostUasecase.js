import { reactive, toRefs, ref } from "vue";
import {
  getAllPostFacebook,
  getPostFacebook,
  createPost,
  updatePost,
  deletePost,
  getFacebookPost,
} from "@/Repository/PostRepository";
import ManagePost from "@/store/models/ManagePost";
import { notificationSuccess, notificationWarning } from "@/hooks/message";
import router from "@/router";
// import dayjs from "dayjs";

const data = reactive({
  isEdit: false,
  postFacebook: [],
  form: new ManagePost(),
  messageError: {},
  isServerError: false,
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
const rules = {
  facebook_post_id: [{ required: true, message: "ກະລຸນາເລືອກຂໍ້ມູນກ່ອນ" }],
  // title: [
  //     { required: true, message: "ກະລຸນາເລືອກຂໍ້ມູນກ່ອນ" },
  // ],
  body: [{ required: true, message: "ກະລຸນາປ້ອນຂໍ້ມູນກ່ອນ" }],
  match: [{ required: true, message: "ກະລຸນາເລືອກແມັດກ່ອນ" }],
};

async function resetForm() {
  // refForm.value.resetFields();
  data.form.facebook_post_id = null;
  data.form.title = null;
  data.form.body = null;
  data.form.match = null;
  data.form.is_enable = null;
}
async function submitForm() {
  if (!data.isEdit) {
    try {
      const res = await createPost(data.form);
      if (res) {
        notificationSuccess({
          title: "ບັນທຶກຂໍ້ມູນສຳເລັດ",
          description: "ບັນທຶກຂໍ້ມູນສຳເລັດແລ້ວ",
          position: "topRight",
        });
        router.push({ name: "manageposts.index" }).catch(() => {});
        await resetForm();
      }
    } catch (firstErrorBag) {
      data.isLoading = false;
      data.isServerError = true;
      // data.messageError = Object.values(firstErrorBag.response.data.errors).join('<br>'+' -');
      notificationWarning({
        title: "ເກີດຂໍ້ຜິດພາດ...",
        description: "ກະລຸນາກວດສອບຂໍ້ມູນ",
        position: "topRight",
      });
    }
  }
  if (data.isEdit) {
    try {
      const res = await updatePost(data.form);
      // console.log(data.form.)
      if (res) {
        notificationSuccess({
          title: "ອັບເດດຂໍ້ມູນສຳເລັດ",
          description: "ອັບເດດຂໍ້ມູນສຳເລັດແລ້ວ...",
          position: "topRight",
        });
        await resetForm();
        router.push({ name: "manageposts.index" }).catch(() => {});
      }
    } catch (firstErrorBag) {
      data.isServerError = true;
      // data.messageError = Object.values(firstErrorBag.response.data.errors).join('<br/>' + '  -');
      notificationWarning({
        title: "ເກີດຂໍ້ຜິດພາດ...",
        description: "ກະລຸນາກວດສອບຂໍ້ມູນ",
        position: "topRight",
      });
    }
  }
}

async function loadAllPost() {
  try {
    const res = await getAllPostFacebook();
    if (res) {
      data.postFacebook = res.results.map((post) => ({
        match_two_team: `${post.match.team_a}(${post.match.code}) vs ${post.match.team_b}(${post.match.code})`,
        ...post,
      }));
      // console.log("before:",res.results )
    //   data.postFacebook = res.data.map((send) => ({
    //     message_facebook_post: `${send.message}`,
    //     ...send,
    //   }));
      // console.log("after:",data.postFacebook )
    }
  } catch (error) {}
}

// Facebook Post API
async function onGetFacebookPost() {
  const TOKEN_DEFAULT_VALUE =
    "EAAFLdEq08iYBO3FiadSDniOcU0B2ZAV4EKjZAZCzWA0om8xCcq1552xNDqhqsFZAAb3th1ArWf23ixPZBlQ73wvPnpCJmsGf9az0OFgE2nrB0RMHEHOii2lmbwnO2FAWYzLWDM0he00f4bd9thtnPZBKkiBLzzHBezIAHcnFpRBSu9xotjL74QC8hEOYV5AVEZD";
  const filters = {
    fields: "id,message,created_time,comments.limit(0).summary(true),attachments{type}",
    access_token: TOKEN_DEFAULT_VALUE,
  };
  const response = await getFacebookPost(filters);
  // console.log(response)
}

async function loadPost(id) {
  try {
    const res = await getPostFacebook(id);
    // let my = JSON.parse(JSON.stringify(res))
    if (res) {
      console.log(res);
      //    res.data = res.message;
      res.data = res.id;
      res.match = res.match.id;
      data.form.fromJSON(data.form, res);
    }
  } catch (error) {
    console.log(error);
  }
}
// async function loadPost(id) {
//     try {
//         const res = await getPostFacebook(id);
//         let my = JSON.parse(JSON.stringify(res))
//         if (res) {

//              my.data = res.id;
//           my.match = res.match.id;
//            console.log(my , res)
//                res.match = res.match.id;
//               data.form.fromJSON(data.form, res);
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }
async function handleSubmit(facebookPostData) {
  refForm.value.validate().then(() => {
    const post = facebookPostData.find(
      (_post) => _post.value === data.form.facebook_post_id
    );
    data.form.title = post.label.split(" ").shift();

    // const senMessage = facebookPostData.find(
    //   (_senMessage) => _senMessage.value === data.form.facebook_post_id
    // );
    // data.form.facebook_post_id_message = senMessage.label.split("").shift();
    submitForm();
  });
}

async function onCreate() {
  await resetForm();
  data.isEdit = false;
  router
    .push({
      name: "manageposts.create",
    })
    .catch(() => {});
}

function onEdit(id) {
  data.isEdit = true;
  router
    .push({
      name: "manageposts.edit",
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
    const res = await deletePost(id);
    if (res) {
      notificationSuccess({
        title: "ລຶບຂໍ້ມູນສຳເລັດ...",
        description: "ລຶບຂໍ້ມູນສຳເລັດແລ້ວ",
        position: "topRight",
      });
    }
    await loadAllPost();
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
  loadPost,
  loadAllPost,
  layout,
  onGetFacebookPost,
  rules,
};
