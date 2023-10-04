import Base from "./Base";
export default function MatchModel() {
    Base.call(this);
    this.team_a = null;
    this.team_b = null;
    this.match_time = null;
    this.match_end_activity_time = null;
    this.is_enable = null;

    this.fromJSON = (state, json) => {
        state.team_a = json.team_a;
        state.team_b = json.team_b;
        state.match_time = json.match_time;
        state.match_end_activity_time = json.match_end_activity_time;
        state.is_enable = json.is_enable;
    };
}

