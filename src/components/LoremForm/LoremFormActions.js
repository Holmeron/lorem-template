/**
 * LoremForm actions types
 * @memberof! module:LoremForm#
 * @name ActionsTypes
 * @alias ActionsTypes
 * @property {constant} SUBMIT submit
 */

 export const types = {
    SUBMIT : 'LoremForm/SUBMIT',
};

/**
 * LoremForm submit
 * @function <i>LoremForm</i> <strong>submit</strong>
 * @memberof! module:LoremForm#
 * @returns {object}
 */
export const submit = (data) => {
    return {
        type: types.SUBMIT,
        data
    }
};
