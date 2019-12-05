import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
//import PropTypes from 'prop-types'

import Button from './Button';

import Modal from '../modalEscolha'

const Main = props => {
  return (
    <div className="align-items-center justify-content-center text-center">
      <h1 className="text-white mt-5 mb-5 display-1">Disponível</h1>
      <Button onClick={Modal.toggle}>{Modal.buttonLabel}Resevar</Button>
    </div>
  )
}

// Main.propTypes = {

// }

export default Main

