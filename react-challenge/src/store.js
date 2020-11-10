import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import animeReducer from './stores/reducers/animeReducer';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  anime: animeReducer,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
