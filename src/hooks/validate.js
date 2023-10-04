/**
 *
 * @param {string} str
 * check empty data
 */
export const NotEmpty = str => {
    return {
        required: true,
        message: `- ກະລຸນາປ້ອນຂໍ້ມູນ ${str ? str : '...'}`,
        trigger: 'blur',
        whitespace: true,
    }
}

export const phoneNumber = str => {
    return {
        required: true,
        pattern: /^\d+$/,
        message: '- ເບີໂທຕ້ອງເປັນຕົວເລກ'
    }
}
export const maxNumber = str => {
    return {
        required: true,
        max: 8,
        min: 8,
        message: '- ເບີໂທຕ້ອງບໍ່ຫລາຍກວ່າ 8'
    }
}

export const emailValid = str => {
    return {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: '- ຮູບແບບອີເມວບໍ່ຖືກຕ້ອງ'

    }
}
export const radioValid = str => {
    return {
        required: true,
        message: '- ກະລຸນາເລືອກ ...'
    }
}
