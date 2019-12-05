import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css'


const Button = props => (
  <>
    <button type="button" onClick={props.onClick} className="mb-5 btn btn-outline-light btn-lg" >{props.children}</button>
  </>
)


Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default Button
