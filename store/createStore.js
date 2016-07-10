import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form';
import { routerReducer, syncHistoryWithStore, routerActions, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import weminders from './weminders'
import user from './user'

export default (initialState = {}, history) => {

    // ======================================================
    // Store Enhancers
    // ======================================================
    const enhancers = []
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }

    const middleware = [thunk, routerMiddleware(history)]

    const reducers = {
        weminders: weminders,
        user: user,
        form: formReducer,
        routing: routerReducer
    }

    // ======================================================
    // Store Instantiation and HMR Setup
    // ======================================================
    const store = createStore(
        combineReducers(reducers),
        initialState,
        compose(
            applyMiddleware(...middleware),
            ...enhancers
        )
    )

    return store
}
