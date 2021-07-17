import React from 'react'; 
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css'

import { createStoreHook, Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise'
import ReduxThunk from 'redux-thunk';
import Reducer from './_reducers';
const createStoreMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk) (createStore);

ReactDOM.render(
    <Provider
      store = {createStoreMiddleware(Reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
>
    <App />,
    </Provider> 
    , document.getElementById('root') //root id가 public의 index.html임
      

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

