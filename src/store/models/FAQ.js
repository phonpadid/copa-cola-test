import Base from "./Base";

export default function Career() {
    Base.call(this);
    this.id = null;
    this.title = null;
    this.body = null;
    this.type = "faq";
    this.fromJSON = (json) => {
        this.id = json.id;
        this.title = json.title;
        this.body = json.body;
        this.type = json.type;
    };
}