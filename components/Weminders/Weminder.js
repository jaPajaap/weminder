import React from 'react'
import moment from 'moment'

export const Weminder = (props) => {
    const toNow = moment(props.weminder.date).fromNow();
    return (
        <div className="weminder u-flex">
            <div className="u-flexGrow1">
                <h1 className="weminderTitle">{props.weminder.title}</h1>
                <div className="weminderDate">{toNow}</div>
            </div>
            <div>
                <img className="weminderAvatar" src={props.weminder.from.avatar} />
            </div>
        </div>
    )
}

export default Weminder
