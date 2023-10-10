import {reactive , toRefs, ref} from "vue"
import {getAllPostFacebook, getPostFacebook,createPost,updatePost,deletePost,getFacebookPost } from "@/Repository/PostRepository"
import ManagePost from "@/store/models/ManagePost"
import {notificationSuccess, notificationWarning} from "@/hooks/message";
import router from "@/router";
// import dayjs from "dayjs";

const data = reactive({
    isEdit: false,
    postFacebook: [],
    form: new ManagePost(),
    messageError: {},
    isServerError: false,
})
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
    data.form.facebook_post_id = null;
    data.form.title = null;
    data.form.body = null;
    data.form.match = null;
    data.form.is_enable = null;
}
async function submitForm(){
    if(!data.isEdit){
        try{
            const res = await createPost (data.form);
            if(res){ 
                notificationSuccess({
                    title: "ບັນທຶກຂໍ້ມູນສຳເລັດ",
                    description: "ບັນທຶກຂໍ້ມູນສຳເລັດແລ້ວ",
                    position: "topRight"
                })
                router.push({name: "manageposts.index"}).catch(() => {
                })
                await resetForm();
            }
        }catch(firstErrorBag){
            data.isLoading = false;
            data.isServerError = true;
            // data.messageError = Object.values(firstErrorBag.response.data.errors).join('<br>'+' -');
            notificationWarning({
                title: "ເກີດຂໍ້ຜິດພາດ...",
                description: "ກະລຸນາກວດສອບຂໍ້ມູນ",
                position: "topRight"
            })
        }
    }
    if (data.isEdit) {
        try {
            const res = await updatePost(data.form);
            if (res) {
                notificationSuccess({
                    title: "ອັບເດດຂໍ້ມູນສຳເລັດ",
                    description: "ອັບເດດຂໍ້ມູນສຳເລັດແລ້ວ...",
                    position: "topRight"
                })
                await resetForm();
                router.push({name: "manageposts.index"}).catch(() => {
                })
            }
        } catch (firstErrorBag) {  
            console.log(firstErrorBag)
            data.isServerError = true;
            // data.messageError = Object.values(firstErrorBag.response.data.errors).join('<br/>' + '  -');
            notificationWarning({
                title: "ເກີດຂໍ້ຜິດພາດ...",
                description: "ກະລຸນາກວດສອບຂໍ້ມູນ",
                position: "topRight" 
            })
        }
    }
}

async function loadAllPost() {
    try {
        const res = await getAllPostFacebook();
        if (res) {
            data.postFacebook = res.results;
        }
    } catch (error) {

    }
}

// Facebook Post API
async function onGetFacebookPost(){ 
    const TOKEN_DEFAULT_VALUE = "EAAFLdEq08iYBO3FiadSDniOcU0B2ZAV4EKjZAZCzWA0om8xCcq1552xNDqhqsFZAAb3th1ArWf23ixPZBlQ73wvPnpCJmsGf9az0OFgE2nrB0RMHEHOii2lmbwnO2FAWYzLWDM0he00f4bd9thtnPZBKkiBLzzHBezIAHcnFpRBSu9xotjL74QC8hEOYV5AVEZD"
    const filters = {
        fields:"id,message,created_time,comments.limit(0).summary(true),attachments{type}",
        access_token:TOKEN_DEFAULT_VALUE
    }
    const response = await getFacebookPost(filters)
    // console.log(response)
}

async function loadPost(id) {
    try {
        const res = await getPostFacebook(id);
        // const response = await getFacebookPost(filters)
        if (res) {
        //    res.match_time = dayjs(res.match_time)
        //    res.match_end_activity_time = dayjs(res.match_end_activity_time)
           res.match = res.id; 
           data.form.fromJSON(data.form, res); 
        }
    } catch (error) {
        console.log(error)
    }
}

async function handleSubmit(){
    refForm.value.validate()
      .then(() =>{
        submitForm();
      })
}

async function onCreate() {
    await resetForm();
    data.isEdit = false;
    router.push({
        name: "manageposts.create"
    }).catch(() => {
    })
}

function onEdit(id) {
    data.isEdit = true;
    router.push({
        name: "manageposts.edit",
        params: {
            id: id
        },
        query: {
            edit: "true"
        }
    }).catch((error) => {
        console.log(error)
    })
}

// Delete
async function onDelete(id) {
    try {
        const res = await deletePost(id);
        if (res) {
            notificationSuccess({
                title: "ລຶບຂໍ້ມູນສຳເລັດ...",
                description: "ລຶບຂໍ້ມູນສຳເລັດແລ້ວ",
                position: "topRight"
            })
        }
        await loadAllPost();
    } catch (firstErrorBag) {
        data.isLoading = false;
        notificationWarning({
            title: "ເກີດຂໍ້ຜິດພາດ...",
            description: firstErrorBag.errors.join('\n'),
            position: "topRight"
        })
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
    onGetFacebookPost
}
