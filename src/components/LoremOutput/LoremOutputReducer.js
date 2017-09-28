import * as types from '../../actions/rootActionsTypes';
import LoremOutputController from './LoremOutputController';

export default function (state = {
    output : LoremOutputController.getDefaultJsonData()
  }, action) {
  switch (action.type) {
    case types.CHANGE:
      const output = LoremOutputController.getJsonData(action.formData);
      console.log('outp',output);
      return {
        ...state,

      }
    default:
      return state;
  }
}
