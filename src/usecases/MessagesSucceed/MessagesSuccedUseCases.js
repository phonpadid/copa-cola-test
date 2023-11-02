import { createMessagesSueeccd,getAllMessagesSueeccd } from "../../Repository/MessageSueeccdRepository";
import {notificationSuccess, notificationWarning} from "@/hooks/message";
import { reactive, toRefs, ref } from "vue";

const data = reactive({
    messagessucceed: [],
})

// Save messages
export async function saveMessageSucceed(bodyData){
       await createMessagesSueeccd(bodyData)
    notificationSuccess({
        title: "ບັນທຶກຂໍ້ມູນສຳເລັດ...",
        description: "ບັນທຶກຂໍ້ມູນສຳເລັດແລ້ວ...",
        position: "topRight"
    })  
}

async function loadAllMessagesSueeccd() {
    try {
      const res = await getAllMessagesSueeccd();
      // console.log(res);
      if (res) {
        data.messagessucceed = res.results;
      }
    } catch (error) {}
  }

  export default {
    ...toRefs(data),
    loadAllMessagesSueeccd,
  };
  