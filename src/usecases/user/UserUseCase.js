import {reactive , toRefs, ref} from "vue"
import {getAllUser, getUser,createUser,updateUser,deleteUser } from "@/Repository/UserRepository"
import UserModel from "@/store/models/User"
import {notificationSuccess, notificationWarning} from "@/hooks/message";
import router from "@/router";

const data = reactive({
    isEdit: false,
    user: [],
    form: new UserModel(),
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
    refForm.value.resetFields();
}
async function submitForm(){
    if(!data.isEdit){
        try{
            const res = await createUser (data.form);
            if(res){ 
                notificationSuccess({
                    title: "ບັນທຶກຂໍ້ມູນສຳເລັດ",
                    description: "ບັນທຶກຂໍ້ມູນສຳເລັດແລ້ວ",
                    position: "topRight"
                })
                router.push({name: "user.index"}).catch(() => {
                })
            }
        }catch(firstErrorBag){
            data.isLoading = false;
            data.isServerError = true;
            data.messageError = Object.values(firstErrorBag.response.data.errors).join('<br>'+' -');
            notificationWarning({
                title: "ເກີດຂໍ້ຜິດພາດ...",
                description: "ກະລຸນາກວດສອບຂໍ້ມູນ",
                position: "topRight"
            })
        }
    }
    if (data.isEdit) {
        try {
            
            const res = await updateUser(data.form);
            if (res) {
                notificationSuccess({
                    title: "ອັບເດດຂໍ້ມູນສຳເລັດ",
                    description: "ອັບເດດຂໍ້ມູນສຳເລັດແລ້ວ...",
                    position: "topRight"
                })
                router.push({name: "user.index"}).catch(() => {
                })
            }
        } catch (firstErrorBag) {  
            console.log(firstErrorBag)
            data.isServerError = true;
            data.messageError = Object.values(firstErrorBag.response.data.errors).join('<br/>' + '  -');
            notificationWarning({
                title: "ເກີດຂໍ້ຜິດພາດ...",
                description: "ກະລຸນາກວດສອບຂໍ້ມູນ",
                position: "topRight" 
            })
        }
    }
}

async function loadAllUser() {
    try {
        const res = await getAllUser();
        if (res) {
            data.user = res.results;
        }
    } catch (error) {

    }
}

async function loadUser(id) {
    try {
        const res = await getUser(id);
        if (res) {
            data.form.fromJSON(data.form, res); 
        }
    } catch (error) {
    }
}

async function handleSubmit(){
    refForm.value.validate()
      .then(() =>{
        submitForm();
      })
}

async function onCreate() {
    data.isEdit = false;
    router.push({
        name: "user.create"
    }).catch(() => {
    })
}

function onEdit(id) {
    data.isEdit = true;
    router.push({
        name: "user.edit",
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
        const res = await deleteUser(id);
        if (res) {
            notificationSuccess({
                title: "ລຶບຂໍ້ມູນສຳເລັດ...",
                description: "ລຶບຂໍ້ມູນສຳເລັດແລ້ວ",
                position: "topRight"
            })
        }
        await loadAllUser();
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
    loadUser,
    loadAllUser,
    layout
}
