import { types as LoremFormTypes } from './LoremFormActions';

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
