import React, { PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import Weminders from '../Weminders'
import Login from '../Login'
import Editor from '../Editor'

class AppContainer extends React.Component {
    static propTypes = {
        store: PropTypes.object.isRequired
    }

    render() {
        const { store } = this.props
        const onSubmit = (values) => {
            console.log('submit ', values)
        }

        return (
            <Provider store={store}>
                <div style={{ height: '100%' }}>
                    <Weminders />
                    <Login />
                    <Editor  />
                </div>
            </Provider>
        )


    }
}

export default AppContainer
