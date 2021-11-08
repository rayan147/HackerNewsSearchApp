
import { compose, applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import reducers from './reducers';
import api from './api';


// dev tool
const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

  // inject AxiosInstance into action creators
const middlewares = [thunk.withExtraArgument(api)];

export const configureStore =createStore(
    reducers, 
    composeEnhancers(applyMiddleware(...middlewares))
);