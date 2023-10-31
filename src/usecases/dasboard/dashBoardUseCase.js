import {reactive, ref, toRefs} from "vue";
// import router from "@/router"
// import {notificationSuccess} from "@/utils/message";

const data = reactive({
    isEdit: false,
    isLoading: false,
    office: [],
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

export default {
    ...toRefs(data),
    layout,
    rules,
    refForm,
}
