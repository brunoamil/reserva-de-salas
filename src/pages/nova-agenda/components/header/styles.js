import styled from 'styled-components'
import {Icon} from 'semantic-ui-react'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    margin-top: -10px;

`
export const View = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content: space-between;
   
  

`
export const ContainerHeader = styled.div`
  display: flex;
  /* margin: 0px 5px;  */
`;

export const ContainerVoltar = styled.div`
  display:flex;
  flex-flow : row nowrap;
  align-items : center;
  text-align : center;
`;

export const ContainerLeftHeader = styled.div`
  display:flex;
  flex-flow : row nowrap;
  align-items : center;
  text-align : center;

`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: right;

    /* width: 100vw;
    padding: 2px 0px; */
`


export const Logo = styled.img`
    width: 60px;
    margin: 15px 10px 6px 1px;
`

export const UserAling = styled.div`
    display:flex;
    /* justify-content:flex-end; */
    flex-flow: row nowrap;
    margin: 15px 0px 30px 0px;

    h1 {
      color: #0d4b81;
      font-family: "PT Sans",sans-serif;
      line-height : 1.2em;
      font-size: 1.3rem;
      font-weight: 700;
      margin : 0px 5px 0px 0px;
    }

`
export const Button = styled.button`
    margin: 0px 5px 5px 5px;
    background-color: #0d4b81;
    color:white;
    border:none;

    width: 60px;
    height: 2.2rem;

    font-family: "Open Sans",sans-serif,arial;
    font-size: 1.1rem;
    font-weight: 500;
    text-align:center;
`
export const ButtonVoltar = styled(Icon)`
    margin: 0px 10px;
`
// export const ContainerAlert = styled.div`
//     display: flex;
//     flex-direction:row;
//     height:10px;


// `

export const Title = styled.h1`
    color: #0d4b81;
    font-family: "PT Sans",sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 0.4em;
`
export const ViewSelect = styled.div`
    display:flex;
    width:100%;
    justify-content:flex-end;
    margin : -30px 0px 2px 0px;
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
    
    margin-right: 20px;

`

export const Select = styled.select`
    display: flex;
    align-items: center !important;
    justify-content: center;
    text-align: center !important;

    padding: 0px 5px;
    
    border: 1px solid rgba(0, 0, 0, 0.541);
    height: 30px;

    background-color:white;
    color:#0d4b81;

    option {
      white-space : none !important;
      width : 10px !important;
      padding: 0 auto !important;
    }
`

export const Texto = styled.p`
    color: #0d4b81;
    font-family: "PT Sans",sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    margin:0px 5px;

`