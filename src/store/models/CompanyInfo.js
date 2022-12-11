import Base from "./Base";

export default function CompanyInfo() {
    Base.call(this);
    this.id = "";
    this.name = "";
    this.slogan = "";
    this.image_profile = null;
    this.image_galleries = null;


    this.fromJSON = (json) => {
        this.id = json.id;
        this.name = json.name;
        this.slogan = json.slogan;
        this.image_profile = json.image_profile;
        this.image_galleries = json.image_galleries;
    };
}