import Base from "./Base";

export default function Register() {
    Base.call(this);
    this.id = null;
    this.email = null;
    this.password = null;
    this.password_confirmation = null;

    this.fromJSON = (json) => {
        this.id = json.id;
        this.email = json.email;
        this.password = json.password;
        this.password_confirmation = json.password_confirmation;
    };
}