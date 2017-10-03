/**
 * LoremOutput actions types
 * @memberof! module:LoremOutput#
 * @name ActionsTypes
 * @alias ActionsTypes
 * @property {constant} CHANGE change
 */

 export const types = {
   CHANGE : 'LoremOutput/CHANGE',
   COPY_TEXT : 'LoremOutput/COPY_TEXT',
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
 * LoremForm copyText
 * @function <i>LoremOutput</i> <strong>copyText</strong>
 * @memberof! module:LoremForm#
 * @returns {object}
 */
export const copyText = (text) => {

    return {
        type: types.COPY_TEXT,
        text
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
