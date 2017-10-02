/**
 * LoremOutput actions types
 * @memberof! module:LoremOutput#
 * @name ActionsTypes
 * @alias ActionsTypes
 * @property {constant} CHANGE change
 */

 export const types = {
   CHANGE : 'LoremOutput/CHANGE',
   SNACKBAR_OPEN : 'LoremOutput/SNACKBAR_OPEN',
   SNACKBAR_CLOSE : 'LoremOutput/SNACKBAR_CLOSE'
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

/**
 * LoremForm snackBarButtonOpen
 * @function <i>LoremOutput</i> <strong>snackBarButtonOpen</strong>
 * @memberof! module:LoremForm#
 * @returns {object}
 */
export const snackBarButtonOpen = () => {

    return {
        type: types.SNACKBAR_OPEN
    }
};

/**
 * LoremForm snackBarButtonClose
 * @function <i>LoremOutput</i> <strong>snackBarButtonClose</strong>
 * @memberof! module:LoremForm#
 * @returns {object}
 */
export const snackBarButtonClose = () => {

    return {
        type: types.SNACKBAR_CLOSE
    }
};
