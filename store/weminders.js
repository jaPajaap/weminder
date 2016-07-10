import moment from 'moment'

const WEMINDER_CREATED = 'WEMINDER_CREATED'

export const createWeminder = (values) => {
    return (dispatch, getState) => {
        const user = getState().user
        values.from = {
            name: user.name,
            avatar: user.picture.data.url
        }
        dispatch({
            type: WEMINDER_CREATED,
            payload: values
        })
    }
}

const initialState = [{
    id: 1,
    title: 'Nuvaring ing',
    date: moment().add(1, 'd'),
    recurring: false,
    from: {
        name: 'Aimee',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg'
    },
    to: {
        name: 'Jaap',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/evantahler/128.jpg'
    },
    completed: 'false'
}, {
    id: 2,
    title: 'Go to gym',
    date: moment().add(7, 'd'),
    recurring: false,
    from: {
        name: 'Aimee',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg'
    },
    to: {
        name: 'Jaap',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/evantahler/128.jpg'
    },
    completed: 'false'
}]

const ACTION_HANDLERS = {
    [WEMINDER_CREATED]: (state, action) => {
        return [...state, action.payload]
    }
}

export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
