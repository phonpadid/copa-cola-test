// ... CRUD FUNCTION OR ETC
// export const createUser(){...}
import store from "@/store"

const url = "messagetemplates/"

export async function getAllMessages (filters){
    return await store.dispatch("data-resources/listing",{
        options_request:filters,
        method:"GET",
        actionUri:url
    })
} 


// Create user 
export function createMessages(data){
    const body = {
        _method:'post',
        formData: false,
        actionUri: url,
        ...data,
    }
    return store.dispatch("data-resources/newManage", body)
}
// // Update User 
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
