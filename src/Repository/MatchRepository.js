// ... CRUD FUNCTION OR ETC
// export const createUser(){...}
import store from "@/store"
import dayjs from "dayjs"

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

// Create Match
export function createMatch(req){
    const data = {
        team_a: req.team_a,
        team_b: req.team_b,
        match_time:dayjs(req.match_time).format("YYYY-MM-DD HH:mm:ss"),
        match_end_activity_time:dayjs(req.match_end_activity_time).format("YYYY-MM-DD HH:mm:ss"),
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
export function updateMatch(id,req){
    const data = {
        team_a: req.team_a,
        team_b: req.team_b,
        match_time:dayjs(req.match_time).format("YYYY-MM-DD HH:mm:ss"),
        match_end_activity_time:dayjs(req.match_end_activity_time).format("YYYY-MM-DD HH:mm:ss"),
        is_enable:req.is_enable
    }
    const body = {
        method: 'put',
        formData:false,
        actionUri: `matches/${id}/`,
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