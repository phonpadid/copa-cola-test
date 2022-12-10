import {createStore} from 'vuex';
import dataResources from "@/hooks/data-resources";
import auth from "@/store/modules/auth";

const Store = createStore({
    modules: {
        auth: auth(),
        'data-resources': dataResources(),
    },
})

export default Store;
