import Base from "./Base";
export default function MatchResultModel() {
    Base.call(this);
    this.match_id = null;
    this.team_a_score = null;
    this.team_b_score = null;
    this.is_publish = null;

    this.fromJSON = (state, json) => {
        state.match_id = json.match_id;
        state.team_a_score = json.team_a_score;
        state.team_b_score = json.team_b_score;
        state.is_publish = json.is_publish;
    };
}

