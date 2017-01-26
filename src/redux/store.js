import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { queryReducer } from './reducers';

const middlewares = [];
const store = createStore(queryReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
