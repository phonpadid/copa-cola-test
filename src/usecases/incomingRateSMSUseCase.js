import {reactive, ref, toRefs} from "vue";
import router from "@/router"
import {notificationSuccess} from "@/utils/message";

const data = reactive({
    isEdit: false,
    isLoading: false,
})
const layout = {
    labelCol: {
        span: 10,
    },
    wrapperCol: {
        span: 14,
    },
};
const refForm = ref(null);
const rules = {}

function onCreate() {
    data.isEdit = false;
    router.push({
        name: "incomingRateSMS.create"
    }).catch(() => {
    })
}

function onEdit(id) {
    router.push({
        name: "incomingRateSMS.edit",
        params: {
            id: id,
        },
        query: {
            edit: "true"
        }
    }).catch(() => {
    })
}

function onDelete() {
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
