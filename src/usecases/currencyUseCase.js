import {reactive, ref, toRefs} from "vue";
import router from "@/router"
import {notificationSuccess} from "@/utils/message";

const data = reactive({
    isEdit: false,
    isLoading: false,
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
    data.isEdit = false;
    router.push({
        name: "currency.create"
    }).catch(() => {
    })
}

function onEdit(id) {
    router.push({
        name: "currency.edit",
        params: {
            id: id,
        },
        query: {
            edit: "true"
        }
    }).catch(() => {
    })
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
