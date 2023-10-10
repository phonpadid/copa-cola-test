// ... CRUD FUNCTION OR ETC
// export const createUser(){...}
import store from "@/store";
const FACEBOOK_URL = "https://graph.facebook.com/v13.0/me/posts";
// Facebook Post
export async function getFacebookPost(filters) {
  return await store.dispatch("data-resources/listing", {
    options_request: filters,
    method: "GET",
    newUrlApi: FACEBOOK_URL,
  });
}
