import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import counterReducer from "./store/reducers/counter"
import resultsReducer from "./store/reducers/results"
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
  counter: counterReducer,
  results: resultsReducer
})

const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware], Dispatching', action)
      const result = next(action)
      console.log('[Middleware], next state', store.getState())
      return result
    }
  }
}
const store = createStore(rootReducer, applyMiddleware(logger))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
