// ... CRUD FUNCTION OR ETC
// export const createUser(){...}
import store from "@/store"

const url = "matcheresults/"

export async function getAllMatchResult (filters){
    return await store.dispatch("data-resources/listing",{
        options_request:filters,
        method:"GET",
        actionUri:url
    })
} 
export async function getMatchResult(id){
    return await store.dispatch("data-resources/listing",{
        method:"GET",
        actionUri:`matcheresults/${id}`
    })
} 

// Create MatchResult
export function createMatchResult(req){
    const data = {
        match_id: req.match_id,
        team_a_score: req.team_a_score,
        team_b_score:req.team_b_score,
        is_publish:req.is_publish,
    }
    const body = {
        _method:'post',
        formData: true,
        actionUri: url,
        ...data,
    }
    return store.dispatch("data-resources/manage", body)
}
// Update MatchResult
export function updateMatchResult(req){
    const data = {
        match_id: req.match_id,
        team_a_score: req.team_a_score,
        team_b_score:req.team_b_score,
        is_publish:req.is_publish,
    }
    const body = {
        method: 'put',
        formData:true,
        actionUri: `matcheresults/${req.id}/`,
        ...data
    }
    return store.dispatch("data-resources/manage",body)
}
// Delete
export function deleteMatchResult(id) {
    const body = {
        method: 'delete',
        actionUri: `matcheresults/${id}/`,
        formData: false,
    }
    return store.dispatch("data-resources/manage", body)
}