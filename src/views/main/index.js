import React from 'react'
import Header from './header/components/footer/header/header'
import Agenda from './agenda/agenda'
import Footer from './header/components/footer/footer'


export default props => {
    return(
        <div>
            <Header/>
            <Agenda/>
            <Footer/>
        </div>
    )
}