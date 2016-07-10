import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Weminder from './Weminder'


const Weminders = (props) => {
    return (
        <div>
            {props.weminders.map(weminder => (
                <Weminder weminder={weminder} key={weminder.title} />
            ))}
            <button className="Button Button--fab" type="button">+</button>
        </div>
    )
}

const mapActionCreators = {
}

const mapStateToProps = (state, ownProps) => ({
    weminders: state.weminders
})

export default connect(mapStateToProps, mapActionCreators)(Weminders)
