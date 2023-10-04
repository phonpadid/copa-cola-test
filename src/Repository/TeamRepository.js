// ... CRUD FUNCTION OR ETC
// export const createUser(){...}
import store from "@/store"

const url = "teams/"

export async function getAllTeam (filters){
    return await store.dispatch("data-resources/listing",{
        options_request:filters,
        method:"GET",
        actionUri:url
    })
} 
export async function getTeam (id){
    return await store.dispatch("data-resources/listing",{
        method:"GET",
        actionUri:`teams/${id}`
    })
} 

// Create Team
export function createTeam(req){
    const data = {
        name: req.name,
        code: req.code,
    }
    const body = {
        _method:'post',
        formData: true,
        actionUri: url,
        ...data,
    }
    return store.dispatch("data-resources/manage", body)
}
// Update Team
export function updateTeam(req){
    const data = {
        name: req.name,
        code: req.code,
    }
    const body = {
        method: 'put',
        formData:true,
        actionUri: `teams/${req.id}/`,
        ...data
    }
    return store.dispatch("data-resources/manage",body)
}

// Delete
export function deleteTeam(id) {
    const body = {
        method: 'delete',
        actionUri: `teams/${id}/`,
        formData: false,
    }
    return store.dispatch("data-resources/manage", body)
}