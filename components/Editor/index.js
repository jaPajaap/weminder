import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form';
import { createWeminder } from '../../store/weminders';

const WeminderFormComponent = (props) => {
    const {fields: {title, date, time, to, google}, handleSubmit, submitting} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div className="box">
                <input type="text" placeholder="Title" {...title} />
            </div>
            <div className="box">
                <input type="date" placeholder="Date" {...date} />
            </div>
            <div className="box">
                <input type="time" placeholder="Time" {...time} />
            </div>
            <div className="box">
                <input type="text" placeholder="to" {...to} />
            </div>
            <div className="box">
                <input type="checkbox" id="google" {...google} /> <label htmlFor="google">Add to Google Calendar</label>
            </div>
            <div className="box">
                <button type="submit" disabled={submitting}>Create</button>
            </div>
        </form>
    )
}

const WeminderForm = reduxForm({
    form: 'weminder',
    fields: ['title', 'date', 'time', 'to', 'google']
})(WeminderFormComponent);


const Editor = (props) => {
    const submit = (values) => {
        props.createWeminder(values)
        props.history.push('/')
    }
    return (
        <WeminderForm onSubmit={submit} />
    )
}

const mapActionCreators = {
    createWeminder: (values) => {
        return createWeminder(values)
    }
}

const mapStateToProps = (state, ownProps) => ({
    
})

export default connect(mapStateToProps, mapActionCreators)(Editor)
