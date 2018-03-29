import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger';
import thunk from "redux-thunk"; //处理异步
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import reducer from "./reducers/index.js";
import Home from './components/home';


let store = createStore(reducer, applyMiddleware(createLogger(), thunk));


render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Home}>
                
            </Route>
        </Router>
    </Provider>
    , document.getElementById('root')
);