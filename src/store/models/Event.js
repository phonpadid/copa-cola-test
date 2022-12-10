import Base from "./Base";

export default function Event() {
    Base.call(this);
    this.id = null;
    this.title = null;
    this.body = null;
    this.schedule = null;
    this.activities = [1];


    this.fromJSON = (json) => {
        this.id = json.id;
        this.title = json.title;
        this.body = json.body;
        this.schedule = json.schedule;
        this.activities = json.activities;
    };
}