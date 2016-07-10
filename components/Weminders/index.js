import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Weminder from './Weminder'
import { Link } from 'react-router'

const Weminders = (props) => {
    return (
        <div>
            <div className="menu u-flex">
                <div className="menuItem is-selected u-flexGrow1"><strong>My</strong>minders</div>
                <div className="menuItem u-flexGrow1"><strong>We</strong>minders</div>
            </div>
            {props.weminders.map(weminder => (
                <Weminder weminder={weminder} key={weminder.title} />
            ))}
            <Link to="create" className="actionButton">
                <button className="Button Button--fab" type="button">+</button>
            </Link>

        </div>
    )
}

const mapActionCreators = {
}

const mapStateToProps = (state, ownProps) => ({
    weminders: state.weminders
})

export default connect(mapStateToProps, mapActionCreators)(Weminders)
