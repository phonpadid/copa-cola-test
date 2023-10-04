import {reactive , toRefs, ref} from "vue"
import {getAllTeam, getTeam,createTeam,updateTeam,deleteTeam } from "@/Repository/TeamRepository"
import TeamModel from "@/store/models/Team"
import {notificationSuccess, notificationWarning} from "@/hooks/message";
import router from "@/router";

const data = reactive({
    isEdit: false,
    teams: [],
    form: new TeamModel(),
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
            const res = await createTeam (data.form);
            if(res){ 
                notificationSuccess({
                    title: "ບັນທຶກຂໍ້ມູນສຳເລັດ",
                    description: "ບັນທຶກຂໍ້ມູນສຳເລັດແລ້ວ",
                    position: "topRight"
                })
                router.push({name: "managetext.index"}).catch(() => {
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
            const res = await updateTeam(data.form);
            if (res) {
                notificationSuccess({
                    title: "ອັບເດດຂໍ້ມູນສຳເລັດ",
                    description: "ອັບເດດຂໍ້ມູນສຳເລັດແລ້ວ...",
                    position: "topRight"
                })
                router.push({name: "managetext.index"}).catch(() => {
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

async function loadAllTeam() {
    try {
        const res = await getAllTeam();
        if (res) {
            data.teams = res.results;
        }
    } catch (error) {

    }
}

async function loadTeam(id) {
    try {
        const res = await getTeam(id);
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
        name: "managetext.create"
    }).catch(() => {
    })
}

function onEdit(id) {
    data.isEdit = true;
    router.push({
        name: "managetext.edit",
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
        const res = await deleteTeam(id);
        if (res) {
            notificationSuccess({
                title: "ລຶບຂໍ້ມູນສຳເລັດ...",
                description: "ລຶບຂໍ້ມູນສຳເລັດແລ້ວ",
                position: "topRight"
            })
        }
        await loadAllTeam();
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
    loadTeam,
    loadAllTeam,
    layout
}
