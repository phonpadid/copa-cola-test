import Base from "./Base";

export default function Career() {
    Base.call(this);
    this.id = "";
    this.name = "";
    this.slogan = "";
    this.image_profile = {};
    this.image_gallery = [];


    this.fromJSON = (json) => {
        this.id = json.id;
        this.name = json.name;
        this.slogan = json.slogan;
        this.image_profile = json.image_profile;
        this.image_gallery = json.image_gallery;
    };
}