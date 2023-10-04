// ... CRUD FUNCTION OR ETC
// export const createUser(){...}
import store from "@/store"

const url = "matches/"

export async function getAllMatch (filters){
    return await store.dispatch("data-resources/listing",{
        options_request:filters,
        method:"GET",
        actionUri:url
    })
} 
export async function getMatch(id){
    return await store.dispatch("data-resources/listing",{
        method:"GET",
        actionUri:`matches/${id}`
    })
} 

// Create Team
export function createMatch(req){
    const data = {
        team_a: req.team_a,
        team_b: req.team_b,
        match_time:req.match_time,
        match_end_activity_time:req.match_end_activity_time,
        is_enable:req.is_enable
    }
    const body = {
        _method:'post',
        formData: true,
        actionUri: url,
        ...data,
    }
    return store.dispatch("data-resources/manage", body)
}
// Update Match
export function updateMatch(req){
    const data = {
        team_a: req.team_a,
        team_b: req.team_b,
        match_time:req.match_time,
        match_end_activity_time:req.match_end_activity_time,
        is_enable:req.is_enable
    }
    const body = {
        method: 'put',
        formData:false,
        actionUri: `matches/${req.id}/`,
        ...data
    }
    return store.dispatch("data-resources/manage",body)
}
// Delete
export function deleteMatch(id) {
    const body = {
        method: 'delete',
        actionUri: `matches/${id}/`,
        formData: false,
    }
    return store.dispatch("data-resources/manage", body)
}