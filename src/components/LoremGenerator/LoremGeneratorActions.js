/**
 * LoremGenerator actions types
 * @memberof! module:LoremGenerator#
 * @name ActionsTypes
 * @alias ActionsTypes
 * @property {constant} SUBMIT submit
 */

 export const types = {
    SUBMIT : 'LoremGenerator/SUBMIT',
};

/**
 * LoremGenerator submit
 * @function <i>LoremGenerator</i> <strong>submit</strong>
 * @memberof! module:LoremGenerator#
 * @returns {object}
 */
export const submit = (data) => {
    return {
        type: types.SUBMIT,
        data
    }
};
