import {reactive, ref, toRefs} from "vue";
import router from "@/router"
import {notificationSuccess} from "@/utils/message";

const data = reactive({
    isEdit: false,
    isLoading: false,
    modalVisible: false,
    modalTitle: ""
})
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 10,
    },
};
const refForm = ref(null);
const rules = {}

function onCreate() {
    data.modalTitle = "Create Re-Run InterConnect Report";
    data.modalVisible = true;
}

function onEdit(id) {
    data.modalTitle = 'Update Re-Run InterConnect Report'
    data.modalVisible = true;
}

function onDelete(id) {
    notificationSuccess({
        title: "Delete Success",
        description: "delete data successfully...",
        position: "topRight"
    })
}

export default {
    ...toRefs(data),
    layout,
    onCreate,
    onEdit,
    onDelete,
    rules,
    refForm,
}
