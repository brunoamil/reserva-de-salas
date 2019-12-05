import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import Styled from 'styled-components'
//import PropTypes from 'prop-types'


const Linha = Styled.hr`
  background-color: #fff;
  height: 1px;
`

const Header = props => {
  return (
    <header className="blockquote">
      <h1 className="text-white ml-5 mb-1 display-3">Status</h1>
      <Linha/>
    </header>
  )
}

// Header.propTypes = {

// }

export default Header
