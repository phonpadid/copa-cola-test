// ... CRUD FUNCTION OR ETC
// export const createUser(){...}
import store from "@/store"

const url = "accounts/"

export async function getAllUser (filters){
    return await store.dispatch("data-resources/listing",{
        options_request:filters,
        method:"GET",
        actionUri:url
    })
} 
export async function getUser (id){
    return await store.dispatch("data-resources/listing",{
        method:"GET",
        actionUri:`accounts/${id}`
    })
} 

// Create user 
export function createUser(req){
    const data = {
        name: req.name,
        email: req.email,
        phone:req.phone,
        password: req.password
    }
    const body = {
        _method:'post',
        formData: false,
        actionUri: url,
        ...data,
    }
    return store.dispatch("data-resources/manage", body)
}
// Update User 
export function updateUser(req){
    const data = {
        name: req.name,
        email: req.email,
        phone: req.phone,
        password: req.password,
    }
    const body = {
        method: 'put',
        formData:false,
        actionUri: `accounts/${req.id}/`,
        ...data
    }
    return store.dispatch("data-resources/manage",body)
}
// Delete
export function deleteUser(id) {
    const body = {
        method: 'delete',
        actionUri: `accounts/${id}/`,
        formData: false,
    }
    return store.dispatch("data-resources/manage", body)
}