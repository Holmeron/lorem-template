import { types as LoremOutputTypes } from './LoremOutputActions';
import LoremOutputController from './LoremOutputController';

export default function (state = {
    output : LoremOutputController.getDefaultJsonData().text,
    snackbarOpen: false
  }, action) {
  switch (action.type) {
    case LoremOutputTypes.CHANGE:
      const output = LoremOutputController.getJsonData(action.formData);
      return {
        ...state,
        output
      }
    case LoremOutputTypes.COPY_TEXT:
      LoremOutputController.copyText(action.text);
      return {
        ...state,
        snackBarOpen: true
      }
    case LoremOutputTypes.SNACKBAR_CLOSE:
      return {
        ...state,
        snackBarOpen: false
      }
    default:
      return state;
  }
}
