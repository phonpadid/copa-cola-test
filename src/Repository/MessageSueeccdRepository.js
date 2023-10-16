// ... CRUD FUNCTION OR ETC
// export const createUser(){...}
import store from "@/store"

const url = "send-facebook-messages/"

export async function getAllMessagesSueeccd (filters){
    return await store.dispatch("data-resources/listing",{
        options_request:filters,
        method:"GET",
        actionUri:url
    })
} 


// Create Message 
export function createMessagesSueeccd(data){
    const body = {
        _method:'post',
        formData: false,
        actionUri: url,
        ...data,
    }
    return store.dispatch("data-resources/newManage", body)
}
// export function updateUser(req){
//     const data = {
//         name: req.name,
//         email: req.email,
//         phone: req.phone,
//         password: req.password,
//     }
//     const body = {
//         method: 'put',
//         formData:false,
//         actionUri: `accounts/${req.id}/`,
//         ...data
//     }
//     return store.dispatch("data-resources/manage",body)
// }
