import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import thunk from 'redux-thunk';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import historyReducer from './reducers/history-reducer'
import launchReducer from './reducers/launch-reducer'
import modalReducer from './reducers/modal-reducer'

const allReducer = combineReducers({
    history: historyReducer,
    launch: launchReducer,
    select_launch: modalReducer
})

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
    allReducer, {
        history: {},
        launch: {},
        select_launch: {}
    },
    allStoreEnhancers
)

export default store

ReactDOM.render( < Provider store = { store } > < App / > < /Provider>, document.getElementById('root'));

        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: https://bit.ly/CRA-PWA
        serviceWorker.unregister();