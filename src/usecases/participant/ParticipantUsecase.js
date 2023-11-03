import { getAllParticipants } from "../../Repository/ParticipantRepository";
import { reactive, toRefs, ref } from "vue";

const data = reactive({
    participants: [],
})

// Save messages
async function loadAllParticipants() {
    try {
      const res = await getAllParticipants();
      // console.log(res);
      if (res) {
        data.participants = res.results;
      }
    } catch (error) {}
  }

  export default {
    ...toRefs(data),
    loadAllParticipants,
  };
  