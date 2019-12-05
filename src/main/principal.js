import React from 'react'
import Header from './header/header'
import Agenda from './agenda/agenda'
import Footer from './header/footer'


export default props => {
    return(
        <div>
            <Header/>
            <Agenda/>
            <Footer/>
        </div>
    )
}