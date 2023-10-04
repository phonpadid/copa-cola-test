import Base from "./Base";
export default function TeamModel() {
    Base.call(this);
    this.id = null;
    this.name = null;
    this.code = null;

    this.fromJSON = (state, json) => {
        state.id = json.id;
        state.name = json.name;
        state.code = json.code;

    };
}

