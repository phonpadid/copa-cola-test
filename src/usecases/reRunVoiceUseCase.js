import {reactive, ref, toRefs} from "vue";
import router from "@/router"

const data = reactive({
    isEdit: false,
    isLoading: false,
    modalVisibleVoice: false,
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
    data.modalVisibleVoice = true;
}

export default {
    ...toRefs(data),
    layout,
    onCreate,
    rules,
    refForm,
}