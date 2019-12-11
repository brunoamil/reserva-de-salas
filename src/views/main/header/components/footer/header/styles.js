import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    width:100%;

`

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items:right;

    /* width: 100vw;
    padding: 2px 0px; */
`


export const Logo = styled.img`
    width: 70px;
    margin: 0.3%;
`
export const ContainerAlert = styled.div`
    display: flex;
    flex-direction:row;
    height:10px;


`


export const Circle = styled.div`
    width:10px;
    height:10px;
    border-radius:15px;
    background-color: brown;

`

export const Title = styled.h1`
    color: #0d4b81;
    font-family: "PT Sans",sans-serif;
    font-size: 1.3rem;
    font-weight: 700;
    margin-top: 0.5rem;
`
export const SelectAling = styled.div`
    margin-left: 12em;
    /* width:50%; */
    display:flex;
    justify-content: flex-end;
    /* flex-direction:row-reverse; */
    flex-flow: row nowrap;
    align-items:center;
    margin-top: 0.9rem;
    


`

export const Select = styled.select`
    padding: 2px 20px;
    text-align:center;
    border: 1px solid rgba(0, 0, 0, 0.541);
    /* margin-right: 1.2rem; */

    background-color:white;
    color:#0d4b81;
`

export const Texto = styled.p`
    color: #0d4b81;
    font-family: "PT Sans",sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    margin-right: 5px;

`


