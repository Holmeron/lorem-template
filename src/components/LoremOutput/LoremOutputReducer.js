import * as types from '../../actions/rootActionsTypes';
import LoremOutputController from './LoremOutputController';

export default function (state = {
    output : LoremOutputController.getDefaultJsonData()
  }, action) {
  switch (action.type) {
    default:
      return state;
  }
}
