/**
 * LoremOutput actions types
 * @memberof! module:LoremOutput#
 * @name ActionsTypes
 * @alias ActionsTypes
 * @property {constant} SUBMIT submit
 */

 export const types = {
    SUBMIT : 'LoremOutput/SUBMIT',
};

/**
 * LoremOutput submit
 * @function <i>LoremOutput</i> <strong>submit</strong>
 * @memberof! module:LoremOutput#
 * @returns {object}
 */
export const submit = (data) => {
    return {
        type: types.SUBMIT,
        data
    }
};
