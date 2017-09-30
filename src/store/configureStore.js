import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../rootReducer';
import rootSaga from '../sagas';


const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(rootReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga)
  };
};

export default configureStore;
