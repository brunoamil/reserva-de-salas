import React from 'react';
import PropTypes from 'prop-types';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';


const Button = props => (
  <>
    <Link to = '/Principal'>
    <button type="button" className="mb-5 btn btn-outline-light btn-lg" >{props.children}</button>
    </Link>
  </>
)


Button.propTypes = {
  children: PropTypes.string,
}

export default Button
