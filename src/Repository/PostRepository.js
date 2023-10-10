// ... CRUD FUNCTION OR ETC
// export const createUser(){...}
import store from "@/store"

const url = "facebookposts/"
const FACEBOOK_URL = "https://graph.facebook.com/v13.0/me/posts";

export async function getAllPostFacebook (filters){
    return await store.dispatch("data-resources/listing",{
        options_request:filters,
        method:"GET",
        actionUri:url
    })
} 
export async function getPostFacebook(id){
    return await store.dispatch("data-resources/listing",{
        method:"GET",
        actionUri:`facebookposts/${id}`
    })
} 
// Facebook Post
export async function getFacebookPost(filters) {
    return await store.dispatch("data-resources/listing", {
      options_request: filters,
      method: "GET",
      newUrlApi: FACEBOOK_URL,
    });
  }


// Create MatchResult
export function createPost(req){
    const data = {
        facebook_post_id: req.facebook_post_id,
        title: req.title,
        body:req.body,
        match : req.match,
        is_enable: req.is_enable,
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
export function updatePost(req){
    const data = {
        facebook_post_id: req.facebook_post_id,
        title: req.title,
        body:req.body,
        match : req.match,
        is_enable: req.is_enable,
    }
    const body = {
        method: 'put',
        formData:false,
        actionUri: `facebookposts/${req.id}/`,
        ...data
    }
    return store.dispatch("data-resources/manage",body)
}
// Delete
export function deletePost(id) {
    const body = {
        method: 'delete',
        actionUri: `facebookposts/${id}/`,
        formData: false,
    }
    return store.dispatch("data-resources/manage", body)
}