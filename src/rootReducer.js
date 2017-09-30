import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import LoremGenerator from './components/LoremGenerator/LoremGeneratorReducer'
import LoremForm from './components/LoremForm/LoremFormReducer'
import LoremOutput from './components/LoremOutput/LoremOutputReducer'


const rootReducer = combineReducers({
    LoremGenerator,
    LoremForm,
    LoremOutput,
    form: formReducer
});

export default rootReducer;
