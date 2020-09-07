import React from 'react';
import { createStore } from 'redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore()

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
