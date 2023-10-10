import Base from "./Base";
export default function FacebookPost() {
    Base.call(this);
    this.id = null;
    this.message = null;
    this.created_time = null;
    this.comments = null;

    this.fromJSON = (state, json) => {
        state.id = json.id;
        state.message = json.message;
        state.created_time = json.created_time;
        state.comments = json.comments;
    };
}

