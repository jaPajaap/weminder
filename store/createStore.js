import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk'
import weminders from './weminders'
import user from './user'

export default () => {

    // ======================================================
    // Store Enhancers
    // ======================================================
    const enhancers = []
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }

    const reducers = {
        weminders: weminders,
        user: user,
        form: formReducer
    }

    // ======================================================
    // Store Instantiation and HMR Setup
    // ======================================================
    const store = createStore(
        combineReducers(reducers),
        compose(
            applyMiddleware(thunk),
            ...enhancers
        )
    )

    return store
}
