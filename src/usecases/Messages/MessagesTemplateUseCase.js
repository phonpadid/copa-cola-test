import { createMessages,getAllMessages,getMessages , updateMessages } from "../../Repository/MessageTemplateRepository";
import {notificationSuccess, notificationWarning} from "@/hooks/message";
import { reactive, toRefs, ref } from "vue";

const data = reactive({
    messages: []
})

// Save messages
 async function saveMessage(bodyData){
    const response = await createMessages({
        messages:bodyData
    })
    console.log(response)
    notificationSuccess({
        title: "ບັນທຶກຂໍ້ມູນສຳເລັດ...",
        description: "ບັນທຶກຂໍ້ມູນສຳເລັດແລ້ວ...",
        position: "topRight"
    })
}

 async function EditMessage(bodyData){
  console.log(bodyData)
    const response = await updateMessages({
        messages:bodyData
    })
    console.log(response)
    // notificationSuccess({
    //     title: "ແກ້ໄຂ້ຂໍ້ມູນສຳເລັດ...",
    //     description: "ແກ້ໄຂ້ຂໍ້ມູນສຳເລັດແລ້ວ...",
    //     position: "topRight"
    // })
}
async function loadAllMessages() {
    try {
      const res = await getAllMessages();
      // console.log(res);
      if (res) {
        if(res.results.length >= 5){
          return res.results.sort((a,b) => a.id - b.id);
        }else{
          return []
        }
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
    loadAllMessages,
    loadMessages,
    EditMessage 
  };
  