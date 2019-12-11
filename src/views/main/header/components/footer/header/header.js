import React from 'react'
import {Logo,Header,Title,Select,SelectAling,Texto,Container,Circle,ContainerAlert} from './styles'
import Img from '../../../lgceuma.png'

export default props => {
    return(
    <div>
        <Header>
            <Container>
                <Logo src={Img}></Logo>
                <Title>Universidade CEUMA - Reserva de Sala</Title>

                <ContainerAlert>
                    <Circle></Circle>
                    <p>Indisponivel</p>
                </ContainerAlert>
                <SelectAling>
                    <Select>
                        <option value="sala1">Sala 1</option>
                        <option value="sala2">Sala 2</option>
                        <option value="sala3">Sala 3</option>
                        <option value="sala4">Sala 4</option>
                    </Select>
                    <Texto>Semana</Texto>
                    <Select>
                        <option value="sala1">2 a 6, Novembro</option>
                        <option value="sala2">9 a 13, Novembro</option>
                        <option value="sala3">16 a 20, Novembro</option>
                        <option value="sala4">23 a 27, Novembro</option>
                    </Select>
                </SelectAling>
                
            </Container>
        </Header>
    </div>
    )
}

 {/* <div className="header mt-2 ml-2">
            <img src={Img} className="lgoceuma"></img>
            <h1>Reserva de Sala</h1>
            
        
        </div> */}

    
