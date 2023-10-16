import Base from "./Base";
export default function ManagePost() {
    Base.call(this);
    this.id = null;
    this.facebook_post_id = null;
    this.title = null;
    this.body = null;
    this.match = null;
    this.is_enable = false;

    this.fromJSON = (state, json) => {
        state.id = json.id;
        state.facebook_post_id = json.facebook_post_id;
        state.title = json.title;
        state.body = json.body;
        state.match = json.match;
        state.is_enable = json.is_enable;
    };
}

