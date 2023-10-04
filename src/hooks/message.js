import {message, notification} from "ant-design-vue";

/***
 *
 * @param str for message
 */
export const messageSuccess = str => {
    return message.success(str)
}
export const messageWarning = str => {
    return message.warning(str)
}
export const messageError = str => {
    return message.error(str)
}

export const messageInfo = str => {
    return message.info(str)
}

/***
 *
 * @param Title,Description,Position for notification
 */
// export const notificationSuccess = (message) => {
//     let action = "warning";
//     return notification`.${action}`({
//         message: `${message.title}`,
//         description: `${message.description}`,
//         placement: `${message.position}`
//     })
// }

export const notificationWarning = (message) => {
    return notification.warning({
        message: `${message.title}`,
        description: `${message.description}`,
        placement: `${message.position}`,
        duration: 1,
    })
}
export const notificationInfo = (message) => {
    return notification.info({
        message: `${message.title}`,
        description: `${message.description}`,
        placement: `${message.position}`,
        duration: 1,
    })
}

export const notificationSuccess = (message) => {
    return notification.success({
        message: `${message.title}`,
        description: `${message.description}`,
        placement: `${message.position}`,
        duration: 1,
    })
}

