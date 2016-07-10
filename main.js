import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store/createStore'
import App from './components/App/App'
import { browserHistory } from 'react-router'

var css = require('./app.css');

const initialState = window.___INITIAL_STATE__
const store = createStore(initialState, browserHistory)

ReactDOM.render(
    <App
        store={store}
        history={browserHistory}
    />,
    document.getElementById('app')
)
