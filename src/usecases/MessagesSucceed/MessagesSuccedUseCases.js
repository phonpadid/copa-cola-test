import { createMessagesSueeccd,getAllMessagesSueeccd } from "../../Repository/MessageSueeccdRepository";
import {notificationSuccess, notificationWarning} from "@/hooks/message";
import { reactive, toRefs, ref } from "vue";

const data = reactive({
    messagessucceed: []
})

// Save messages
export async function saveMessageSucceed(bodyData){
    const response = await createMessagesSueeccd({
        messages:bodyData
    })
    console.log(response)
    notificationSuccess({
        title: "ບັນທຶກຂໍ້ມູນສຳເລັດ...",
        description: "ບັນທຶກຂໍ້ມູນສຳເລັດແລ້ວ...",
        position: "topRight"
    })
}

// export async function EditMessage(bodyData){
//     const response = await getMessages({
//         messages:bodyData
//     })
//     console.log(response)
//     notificationSuccess({
//         title: "ແກ້ໄຂ້ຂໍ້ມູນສຳເລັດ...",
//         description: "ແກ້ໄຂ້ຂໍ້ມູນສຳເລັດແລ້ວ...",
//         position: "topRight"
//     })
// }
async function loadAllMessagesSueeccd() {
    try {
      const res = await getAllMessagesSueeccd();
    //   console.log(res);
      if (res) {
        data.messagessucceed = res.results;
      }
    } catch (error) {}
  }
  
  
async function loadMessages(id) {
    try {
      const res = await getMessages(id);
      console.log(res);
      if (res) {
        //  res.match = res.match.id; ເຫດຜົນທີໃຊ້ແມັດຊ້ອນກັນກາຍ້ອນວ່າມັນ match ມັນຊ້ອນໂຕຂໍ້ມູນ
        // ຖ້າໃໍຊ້ select ໃຫ້ເຮົາໃຊ້ຕົົວເລືອກເປັນ ໄອເດີເລີຍ ມັນຈະຮູ້ເອງເລີຍວ່າເປັນ ໂຕໄອດີ
        data.form.fromJSON(data.form, res);
      }
    } catch (error) {
      // console.log(error)
    }
  }

  export default {
    ...toRefs(data),
    loadAllMessagesSueeccd,
    loadMessages
  };
  