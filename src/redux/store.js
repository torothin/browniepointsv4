import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; // for debugging
import rootReducer from './root-reducer';

const middlewares = [logger];  //done this way so that we can add to the middlewares array later if needed

const store = createStore(rootReducer, applyMiddleware(...middlewares));

// alternative approach if no addition to middlewars:
// const store = createStore(rootReducer, applyMiddleware(logger));

export { store };