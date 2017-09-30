/**
 * LoremOutput actions types
 * @memberof! module:LoremOutput#
 * @name ActionsTypes
 * @alias ActionsTypes
 * @property {constant} CHANGE change
 */

 export const types = {
   CHANGE : 'LoremOutput/CHANGE'
};


/**
 * LoremForm changedFormData
 * @function <i>LoremOutput</i> <strong>changedFormData</strong>
 * @memberof! module:LoremForm#
 * @returns {object}
 */
export const changedFormData = (formData) => {

    return {
        type: types.CHANGE,
        formData
    }
};
