import * as types from '../../actions/rootActionsTypes';

export default function (state = {
    form : {
      isShuffled : 'false',
      loremAmount : 3
    }
  }, action) {
  switch (action.type) {
    default:
      return state;
  }
}
