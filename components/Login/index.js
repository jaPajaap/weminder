import React from 'react'
import FacebookLogin from 'react-facebook-login';
import { loginSuccess, loginFail } from '../../store/user';
import { connect } from 'react-redux';

export const Login = (props) => {
    let show = { display: props.user.loggingIn || props.user.id ? 'none' : 'block' }
    
    const responseFacebook = (response) => {
        if(response.status === 'unknown') {
            props.loginFail()
        }
        props.loginSuccess(response)
    }
    return (
        <div style={show}>
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
    loginSuccess: (user) => loginSuccess(user)
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps, mapActionCreators)(Login)
