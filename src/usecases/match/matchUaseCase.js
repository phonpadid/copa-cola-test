import {reactive , toRefs, ref} from "vue"
import {getAllMatch, getMatch,createMatch,updateMatch,deleteMatch } from "@/Repository/MatchRepository"
import MatchModel from "@/store/models/Matches"
import {notificationSuccess, notificationWarning} from "@/hooks/message";
import router from "@/router";
import dayjs from "dayjs";

const data = reactive({
    isEdit: false,
    matches: [],
    form: new MatchModel(),
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
            const res = await createMatch (data.form);
            if(res){ 
                notificationSuccess({
                    title: "ບັນທຶກຂໍ້ມູນສຳເລັດ",
                    description: "ບັນທຶກຂໍ້ມູນສຳເລັດແລ້ວ",
                    position: "topRight"
                })
                router.push({name: "match.index"}).catch(() => {
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
            const res = await updateMatch(data.form);
            if (res) {
                notificationSuccess({
                    title: "ອັບເດດຂໍ້ມູນສຳເລັດ",
                    description: "ອັບເດດຂໍ້ມູນສຳເລັດແລ້ວ...",
                    position: "topRight"
                })
                router.push({name: "match.index"}).catch(() => {
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

async function loadAllMatch() {
    try {
        const res = await getAllMatch();
        // console.log(res);
        if (res) {
            data.matches = res.results;
        }
    } catch (error) {

    }
}

async function loadMatch(id) {
    try {
        const res = await getMatch(id);
        console.log(res);
        if (res) {
            //res.data.event_date_time = dayjs(res.data.event_date_time);
           res.match_time = dayjs(res.match_time)
           res.match_end_activity_time = dayjs(res.match_end_activity_time)
           data.form.fromJSON(data.form, res); 
        }
    } catch (error) {
        // console.log(error)
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
        name: "match.create"
    }).catch(() => {
    })
}

function onEdit(id) {
    data.isEdit = true;
    router.push({
        name: "match.edit",
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
        const res = await deleteMatch(id);
        if (res) {
            notificationSuccess({
                title: "ລຶບຂໍ້ມູນສຳເລັດ...",
                description: "ລຶບຂໍ້ມູນສຳເລັດແລ້ວ",
                position: "topRight"
            })
        }
        await loadAllMatch();
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
    loadMatch,
    loadAllMatch,
    layout
}
