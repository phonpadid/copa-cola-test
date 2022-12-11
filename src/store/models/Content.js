import Base from "./Base";

export default function Content() {
    Base.call(this);
    this.id = "";
    this.title = "";
    this.body = "";
    this.image_content = null;


    this.fromJSON = (json) => {
        this.id = json.id;
        this.title = json.title;
        this.body = json.body;
        this.image_content = json.image_content;
    };
}