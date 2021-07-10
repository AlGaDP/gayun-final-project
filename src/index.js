import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
//import * as AddToCard from './shared/ducks/addtocart.duck';
import produce from "immer";
import * as AddToCard from './shared/ducks/addtocart.duck';

//import { middleware} from 

// const middlewareEnhancer = applyMiddleware(...middleware);

// const composedEnhancers = (
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // используем compose для применения нескольких усилителей
//   // пробуем использовать compose, который есть в redux-devtools, если его не находим - используем дефлтный
// )(middlewareEnhancer);

// const composedEnhancers = (
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // используем compose для применения нескольких усилителей
//   // пробуем использовать compose, который есть в redux-devtools, если его не находим - используем дефлтный
// )(middlewareEnhancer);

const rootReducer = combineReducers({
  [AddToCard.namespace]: AddToCard.reducer,
});

export const store = createStore(rootReducer); // передадим все усилители;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
