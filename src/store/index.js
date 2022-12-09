import {createStore} from 'vuex';
import dataResources from "@/hooks/data-resources"
const Store = createStore({
    modules: {
        'data-resources':dataResources(),
    },
})

export default Store;
