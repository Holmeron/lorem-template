import { types as LoremFormTypes } from './LoremFormActions';

export default function (state = {
    form : {
      loremShuffle : false,
      loremTitle : false,
      loremAmount : 3
    }
  }, action) {
  switch (action.type) {
    default:
      return state;
  }
}
