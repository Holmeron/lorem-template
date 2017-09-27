import { combineReducers } from 'redux';

import LoremGenerator from '../components/LoremGenerator/LoremGeneratorReducer'
import LoremForm from '../components/LoremForm/LoremFormReducer'
import LoremOutput from '../components/LoremOutput/LoremOutputReducer'

const rootReducer = combineReducers({
    LoremGenerator,
    LoremForm,
    LoremOutput
});

export default rootReducer;
