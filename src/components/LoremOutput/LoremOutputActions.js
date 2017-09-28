/**
 * LoremOutput actions types
 * @memberof! module:LoremOutput#
 * @name ActionsTypes
 * @alias ActionsTypes
 * @property {constant} CHANGE change
 */

 export const types = {
   CHANGE : 'LoremForm/CHANGE'
};


/**
 * LoremForm changedFormData
 * @function <i>LoremForm</i> <strong>changedFormData</strong>
 * @memberof! module:LoremForm#
 * @returns {object}
 */
export const changedFormData = (formData) => {
    return {
        type: types.CHANGE,
        formData
    }
};
