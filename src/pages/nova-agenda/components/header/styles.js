import styled from 'styled-components'
import { Link } from 'react-router-dom';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;

`
export const View = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content: space-between;

    div{
      display:flex;
      flex-flow : row nowrap;
      align-items : center;
      text-align : center;
    }
   

`

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items:right;

    /* width: 100vw;
    padding: 2px 0px; */
`


export const Logo = styled.img`
    width: 60px;
    margin: 15px 5px 5px 1px;
`

export const UserAling = styled.div`
    display:flex;
    /* justify-content:flex-end; */
    flex-flow: row nowrap;
    margin: 5px 0px 30px 0px;

    h1 {
      color: #0d4b81;
      font-family: "PT Sans",sans-serif;
      font-size: 1.3rem;
      font-weight: 700;
      margin : 0px;
    }

`
export const Button = styled.button`
    margin: 0px 5px 0px 5px;
    background-color: #0d4b81;
    color:white;
    border:none;

    width: 60px;
    height: 1.7rem;

    font-family: "Open Sans",sans-serif,arial;
    font-size: 0.75rem;
    font-weight: 500;
    text-align:center;
`
// export const ContainerAlert = styled.div`
//     display: flex;
//     flex-direction:row;
//     height:10px;


// `

export const Title = styled.h1`
    color: #0d4b81;
    font-family: "PT Sans",sans-serif;
    font-size: 1.3rem;
    font-weight: 700;
    margin-top: 0.5rem;
`
export const ViewSelect = styled.div`
    display:flex;
    width:100%;
    justify-content:flex-end;
    margin-top:-30px;
    margin-bottom: 2px;
`
export const CircleAling = styled.div`
    display:flex;
    align-items:flex-end;


`

export const Circle = styled.div`
    width:20px;
    height:20px;
    margin:0px 5px;
    border:1px solid rgba(37, 37, 37, 0.473);
    border-radius:100%;
    background-color: brown;

`
export const Circle2 = styled.div`
    width:20px;
    height:20px;
    margin:0px 5px;
    border-radius:100%;
    border:1px solid rgba(37, 37, 37, 0.473);
    background-color: #e2e2e279;

`

export const Legenda = styled.p`
    font-family: "Open Sans",sans-serif,arial;
    font-size: 1.1rem;
    margin: 0px 15px 0px 2px;

`


export const SelectAling = styled.div`
    width: auto;
    display:flex;
    flex-flow: row nowrap;
    justify-content:flex-end;
    align-items:flex-end;

`

export const Select = styled.select`
    padding: 0px 20px;
    text-align:center;
    border: 1px solid rgba(0, 0, 0, 0.541);
    /* margin-right: 1.2rem; */
    height:20px;

    background-color:white;
    color:#0d4b81;

    option {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
`

export const Texto = styled.p`
    color: #0d4b81;
    font-family: "PT Sans",sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    margin:0px 5px;

`