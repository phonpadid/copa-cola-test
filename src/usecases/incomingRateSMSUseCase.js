import {reactive, ref, toRefs} from "vue";
import router from "@/router"

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
    router.push({
        name: "incomingRateSMS.create"
    }).catch(() => {
    })
}

export default {
    ...toRefs(data),
    layout,
    onCreate,
    rules,
    refForm,
}