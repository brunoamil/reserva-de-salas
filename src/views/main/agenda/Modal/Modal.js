import React, {useEffect} from 'react'
import ReactDOM from 'react-dom'
import ModalView from './modalView'
import PropTypes from 'prop-types'
import './Modal.css'

export default function Modal(props) {
    const modalWrapperTarget = document.createElement('div')

    useEffect(() => {
        modalWrapperTarget.className = "modal-wrapper"

        modalWrapperTarget.addEventListener('click', clickedOutside);
        modalWrapperTarget.addEventListener('click', clickedOutside);
        modalWrapperTarget.addEventListener('keydown', clickedOutside, true);

        document.body.appendChild(modalWrapperTarget)
        _render()

        return () => {
            modalWrapperTarget.removeEventListener('click', clickedOutside);
            modalWrapperTarget.removeEventListener('keydown', clickedOutside);
            ReactDOM.unmountComponentAtNode(modalWrapperTarget);
            document.body.removeChild(modalWrapperTarget);
        }
    })

    const clickedOutside = (e) => {

        if ((e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27)) {
            e.preventDefault();
            props.clickOutside(e)
            return false;
        }

        if (props.clickOutside && e.target.classList.contains('modal-wrapper')) {
            props.clickOutside(e)
        }

    }

    const closeFunc = (e) => {
        if (props.clickOutside) {
            props.clickOutside(e)
        }
    }

    const _render = () => {

        ReactDOM.render(<ModalView children={props.children} closeFunc={closeFunc} title={props.title} frameless={props.frameless} />
            , modalWrapperTarget)
    }

    useEffect(()=>{
        _render()
    },[])
 
    return (
        <noscript />
    )

}

Modal.propTypes = {
    title: PropTypes.string,
    frameless: PropTypes.bool,
    children: PropTypes.element,
    closeFunc: PropTypes.func,

};

Modal.defaultProps = {
    title: '',
    frameless: false
}

