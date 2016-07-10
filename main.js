import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store/createStore'
import App from './components/App/App'
var css = require('./app.css');

const initialState = window.___INITIAL_STATE__
const store = createStore(initialState)

ReactDOM.render(
    <App
        store={store}
    />,
    document.getElementById('app')
)
