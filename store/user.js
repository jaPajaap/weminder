import moment from 'moment'

const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAIL = 'LOGIN_FAIL'

export const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}

export const loginFail = () => {
    return {
        type: LOGIN_FAIL
    }
}

const initialState = {}

const ACTION_HANDLERS = {
    [LOGIN_SUCCESS]: (state, action) => {
        return {...state, ...action.payload}
    },
    [LOGIN_FAIL]: (state, action) => {
        return {...state}
    }
}

export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
