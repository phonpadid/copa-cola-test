import Base from "./Base";
export default function UserModel() {
    Base.call(this);
    this.id = null;
    this.password = null;
    this.email = null;
    this.name = null;
    this.phone = null;

    this.fromJSON = (state, json) => {
        state.id = json.id;
        state.password = json.password;
        state.email = json.email;
        state.name = json.name;
        state.phone = json.phone;

    };
}

