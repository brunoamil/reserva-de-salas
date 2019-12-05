import React from 'react'
import PropTypes from 'prop-types'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'


const Button = props => (
  <>
    <button type="button" className="mb-5 btn btn-outline-light btn-lg" >{props.children}</button>
  </>
)


Button.propTypes = {
  children: PropTypes.string,
}

export default Button
