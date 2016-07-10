import React, { PropTypes } from 'react'
import { Router, Route, hashHistory } from 'react-router'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import { Provider } from 'react-redux'
import { routerActions } from 'react-router-redux'
import Weminders from '../Weminders'
import Login from '../Login'
import Editor from '../Editor'

const UserIsAuthenticated = UserAuthWrapper({
    authSelector: state => state.user,
    redirectAction: routerActions.replace,
    wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
})


class AppContainer extends React.Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    render() {
        const { store, history } = this.props
        const onSubmit = (values) => {
            console.log('submit ', values)
        }

        return (
            <Provider store={store}>
                <div style={{ height: '100%' }}>
                    <Router history={history}>
                        <Route path="/" component={UserIsAuthenticated(Weminders)} />
                        <Route path="/login" component={Login} />
                        <Route path="/create" component={UserIsAuthenticated(Editor)} />
                    </Router>
                </div>
            </Provider>
        )


    }
}

export default AppContainer
