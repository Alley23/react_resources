import React,{Component} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'  
import reducers from './reducers'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';

import Layout from "./container/layout";
import IndexItem from "./container/index-item";
import New from "./container/new";
import Description from "./container/description";
import Todo from "./container/todo";

import './index.scss';

const loggerMiddleware = createLogger()

let store = createStore(reducers, applyMiddleware(
    thunk,
    loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
))

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={IndexItem} />
                <Route path="new" component={New} />
                <Route path="desc/:id" component={Description} />
                <Route path="todo" component={Todo} />
            </Route>
        </Router>
    </Provider>, 
    document.getElementById('root')
);
