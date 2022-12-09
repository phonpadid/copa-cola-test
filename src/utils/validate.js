/**
 *
 * @param {message} str
 * check empty data
 */
export const NotEmpty = str => {
    return {
        required: true,
        message: `please input ${str}`,
        trigger: 'blur',
        whitespace: true,
    }
}

