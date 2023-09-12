import {reactive, ref, toRefs} from "vue";


const data = reactive({
    isEdit: false,
    isLoading: false,
    modalVisibleVoiceCDRs: false,
    modalTitle: "",
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
    data.modalTitle = "";
    data.modalVisibleVoiceCDRs = true;
}

function onEdit(id) {
    data.modalTitle = "";
    data.modalVisibleVoiceCDRs = true;
}

function onDelete(id) {
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
