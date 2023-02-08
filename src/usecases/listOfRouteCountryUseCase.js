import {reactive, ref, toRefs} from "vue";
import router from "@/router"

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
    router.push({
        name: "listRouteCountry.create"
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