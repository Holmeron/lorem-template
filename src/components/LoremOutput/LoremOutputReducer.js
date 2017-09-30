import { types as LoremOutputTypes } from './LoremOutputActions';
import LoremOutputController from './LoremOutputController';

export default function (state = {
    output : LoremOutputController.getDefaultJsonData()
  }, action) {
  switch (action.type) {
    case LoremOutputTypes.CHANGE:
      const output = LoremOutputController.getJsonData(action.formData);

      return {
        ...state,

      }
    default:
      return state;
  }
}
