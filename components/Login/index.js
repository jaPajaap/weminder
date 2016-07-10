import React from 'react'
import FacebookLogin from 'react-facebook-login';
import { loginSuccess, loginFail, getFriends } from '../../store/user';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'

export const Login = (props) => {
    const responseFacebook = (response) => {
        if(response.status === 'unknown') {
            return props.loginFail()
        }
        props.loginSuccess(response)
        props.getFriends()
        props.push(props.route.query.redirect || '/')
        
    }
    return (
        <div>
            <FacebookLogin
                appId="1089349071143963"
                autoLoad={true}
                fields="name,email,picture"
                scope="user_friends"
                callback={responseFacebook}
            />
        </div>
    )
}

const mapActionCreators = {
    loginFail: () => loginFail,
    loginSuccess: (user) => loginSuccess(user),
    getFriends: () => getFriends(),
    push: (route) => push(route)
}

const mapStateToProps = (state, ownProps) => ({
    user: state.user,
    route: ownProps.location
})

export default connect(mapStateToProps, mapActionCreators)(Login)
