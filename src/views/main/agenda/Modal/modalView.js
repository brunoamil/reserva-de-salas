import React from 'react'
import PropTypes from 'prop-types'



export default function ModalView (props) {
    if (props.frameless) {
        return (<div className="modal-nude  box-card">
            <a onClick={props.closeFunc} className="modal-close">X</a>
            <div className="modal-title"> {props.title}</div>
            {props.children}
        </div>)
    }

    return (
    <div className="modal  box-card">
        <a onClick={props.closeFunc} className="modal-close">X</a>
        <div className="modal-title"> {props.title}</div>
        {props.children}
    </div>)
}


ModalView.propTypes = {
    title: PropTypes.string,
    frameless: PropTypes.bool,
    children: PropTypes.element,
    closeFunc: PropTypes.func,

};

ModalView.defaultProps = {
    title: '',
    frameless: false
}