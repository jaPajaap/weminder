import moment from 'moment'

const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAIL = 'LOGIN_FAIL'
const FRIENDS_RECEIVED = 'FRIENDS_RECEIVED'

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

export const getFriends = () => {
    return (dispatch, getState) => {
        const { accessToken } = getState().user
        fetch(`https://graph.facebook.com/me/friends?access_token=${accessToken}`)
            .then(response => response.json())
            .then(res => {
                dispatch({
                    type: FRIENDS_RECEIVED,
                    payload: res.data
                })
            })
    }
}

const initialState = {}

const ACTION_HANDLERS = {
    [LOGIN_SUCCESS]: (state, action) => {
        return {...state, ...action.payload}
    },
    [LOGIN_FAIL]: (state, action) => {
        return {...state}
    },
    [FRIENDS_RECEIVED]: (state, action) => {
        return {...state, friends: action.payload}
    }
}

export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
