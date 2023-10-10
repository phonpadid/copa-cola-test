import { createMessages } from "../../Repository/MessageTemplateRepository";
import {notificationSuccess, notificationWarning} from "@/hooks/message";

export async function saveMessage(bodyData){
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