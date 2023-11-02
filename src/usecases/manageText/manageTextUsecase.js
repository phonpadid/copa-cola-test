import {reactive , toRefs, ref} from "vue"
import {getAllTeam, getTeam,createTeam,updateTeam,deleteTeam } from "@/Repository/TeamRepository"
import TeamModel from "@/store/models/Team"
import {notificationSuccess, notificationWarning} from "@/hooks/message";
import router from "@/router";

const data = reactive({
    isEdit: false,
    teams: [],
    loading:false,
    previous:null,
    next:null,
    page:0,
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
const rules = {
    name: [
        { required: true, message: "ກະລູນາປ້ອນຂໍ້ມູນກ່ອນ", trigger: "red" },
    ],
    code: [
        { required: true, message: "ກະລູນາປ້ອນຂໍ້ມູນກ່ອນ", trigger: "red" },
    ],
};

// Reset
async function resetForm() {
    data.form.name = null;
    data.form.code = null;
}
// SubmitTo form 
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
                await resetForm();
            }
        }catch(firstErrorBag){
            data.loading = false;
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
                await resetForm();
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
// Search
function isFilters(filterObject){
    // console.log()
    const result ={}
    for(const [key , value] of Object.entries(filterObject)){
        if(value){
            result[key] = value
        }
    }
    // console.log(result)
    return result
}
// LoadAllTeam and fix index perpages 
async function loadAllTeam(filters) {
    try {
        data.loading = true
        const filterChecked = isFilters(filters)
        if(filters.page){
            data.page = filters.page
        }else{
            data.page = 0
        }
        const res = await getAllTeam(filterChecked);
            if (res) {
                const previous = res.previous 
                const next = res.next
                data.previous = previous
                data.next = next;
                const currentPage = data.page;
                const newCurrentPerPage = currentPage ? currentPage -1  :currentPage  
                const perPage = 15
                data.teams = res.results.map((team,idx) => ({
                    index:((newCurrentPerPage) * perPage) + (idx + 1),
                    ...team
                }));
            }
            data.loading = false
        } catch (error) {
            data.loading = false
            
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
    data.loading=true
    refForm.value.validate()
      .then(() =>{
        submitForm();
      })
      data.loading=false
}

async function onCreate() {
    await resetForm();
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
            data.loading = true;
            notificationSuccess({
                title: "ລຶບຂໍ້ມູນສຳເລັດ...",
                description: "ລຶບຂໍ້ມູນສຳເລັດແລ້ວ",
                position: "topRight"
                
            })
            await loadAllTeam();
            
        }
    } catch (firstErrorBag) {
        data.loading = false;
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
    layout,
    rules
}
