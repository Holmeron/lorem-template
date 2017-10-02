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
    case LoremOutputTypes.SNACKBAR_OPEN:
    console.log('open');
      return {
        ...state,
        snackBarOpen: true
      }
    case LoremOutputTypes.SNACKBAR_CLOSE:
    console.log('snackBarButtonClose');
      return {
        ...state,
        snackBarOpen: false
      }
    default:
      return state;
  }
}
