import {reactive, ref, toRefs} from "vue";


const data = reactive({
    isEdit: false,
    isLoading: false,
    modalVisibleSMSCDRs: false,
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
    data.modalVisibleSMSCDRs = true;
}

export default {
    ...toRefs(data),
    layout,
    onCreate,
    rules,
    refForm,
}