import { axios, apiUrl, config } from "../../api/axios";
import User from "@/store/models/User";
import Credential from "@/store/models/auth/Credential";
import helpers from "@/hooks/helpers";

const CREDENTIAL = "CREDENTIAL";
export default function create() {
    function getCredential() {
        return localStorage.getItem(CREDENTIAL)
    }

    return {
        namespaced: true,
        state: {
            user: new User(),
            credential: new Credential(),
        },
        getters: {
            userCredential(state) {
                const userCredential = getCredential();
                if (userCredential) {
                    let credential = helpers.parseJson(userCredential);
                    return helpers.isObject(credential) ? credential : new Credential();
                }
                return state.credential;
            },
            token(state, getter) {
                return getter.userCredential.access_token;
            }
        },
        mutations: {
            setCredential(state, payload) {
                const authUser = payload.user;
                const credential = new Credential();
                const user = new User();
                user.fromJSON({
                    id: authUser.id,
                    name: authUser.name,
                });
                credential.fromJSON({
                    access_token: payload.access_token,
                    ...{
                        user
                    }
                });
                state.credential = credential;
                localStorage.setItem(CREDENTIAL, JSON.stringify(state.credential));
            },
            removeCredential(state, payload) {
                const userCredential = getCredential();
                helpers.removeItemsStorage('cert_token', userCredential);
                state.credential = new Credential();
            },
        },
        actions: {
            login(context, user) {
                console.log(user, 111)
                return new Promise(((resolve, reject) => {
                    axios.post(`${apiUrl}/auth/login`, user).then((res) => {
                        if (res.data.code === 200) {
                            const { data } = res.data;
                            context.commit("setCredential", data)
                            resolve(res)
                        }
                    }).catch((error) => {
                        reject(error)
                    })
                }))
            },

            logout(context, payload) {
                axios.post(`${apiUrl}/auth/logout`, {}, config.addTokenHeader(context.getters.token))
                    .then(() => {
                        context.commit('removeCredential', { path });
                    })
                    .catch(() => {
                        context.commit('removeCredential', { path });
                    });
            },

            unauthorized({ dispatch }, payload) {
                const { status } = payload || {};
                if (status === 401) {
                    dispatch('logout');
                }
            },
        }
    }

}
