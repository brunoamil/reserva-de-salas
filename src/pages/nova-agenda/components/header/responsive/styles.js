import styled from 'styled-components'
import {Icon} from 'semantic-ui-react'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    width:100%;

    margin-top: -10px;
    padding-bottom: 10px;

    background-color: #ececec;

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
    margin: 15px 0px 6px 1px;
`

export const UserAling = styled.div`
  display:flex;
  flex-flow: row nowrap;
  align-items: center;

  background-color: #d0d0d0;
  color: #000;

  padding: 5px;
  border-radius: 50px 0px 0px 50px;
  margin-right: -5px;

  h1 {
    margin: 0px;
    font-size: 1.1em;
    font-family: "PT Sans",sans-serif;

  }

  h2{
    color: #2c2c2c;
    margin: 0px;
    font-size: 0.9em;
    font-family: "PT Sans",sans-serif;
  }

`;

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
  font-size: 1.3em !important;

  margin: 0px 5px;

`
// export const ContainerAlert = styled.div`
//     display: flex;
//     flex-direction:row;
//     height:10px;


// `

export const Title = styled.h1`
    color: #0d4b81;
    font-family: "PT Sans",sans-serif;
    font-size: 1.2em;
    font-weight: 700;
    margin-top: 0.4em;
`
export const ViewSelect = styled.div`
    display:flex;
    width:100%;
    justify-content: flex-end;
    margin : -10px 0px 5px 0px;
`

export const ContainerUser = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start
`;

export const ContainerLogout = styled.div`
  margin-left: 30px;
  margin-right: 10px;

`;


export const SelectAling = styled.div`
    width: auto;
    display:flex;
    flex-flow: row nowrap;
    margin-right: 5px;

`

export const Select = styled.select`
    display: flex;
    align-items: center !important;
    justify-content: center;
    text-align: center !important;

    padding: 0px 5px;
    
    border: 1px solid rgba(0, 0, 0, 0.541);
    height: 30px;
    margin-top: 5px;

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