import Base from "./Base";
export default function MatchResultModel() {
    Base.call(this);
    this.id = null;
    this.match = null;
    this.team_a_score = null;
    this.team_b_score = null;
    this.is_publish = true;

    this.fromJSON = (state, json) => {
        state.match = json.match;
        state.id = json.id;
        state.team_a_score = json.team_a_score;
        state.team_b_score = json.team_b_score;
        state.is_publish = json.is_publish;
    };
}

