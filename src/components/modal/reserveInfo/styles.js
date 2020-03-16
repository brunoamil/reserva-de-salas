import styled from 'styled-components';

export const Container = styled.div`
  height: 18em;
`;

export const ContainerInfo = styled.div`
  display:flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ContainerDados = styled.div`
  width: 100%;
  padding: 1em 1em;
  margin-top: -10px;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  h1{
    margin: 0px;
    margin-left: 5px;
    font-size: 1.28571429rem;
  }
`;

export const ContainerHorario = styled.div`
  display: flex;
  /* margin-right: 7em; */
  width: 80%;
  
  span {
    display: flex;
  }

  @media (max-width: 768px){
    flex-direction: column;

    span {
      margin-bottom: 20px;
    }
  }

  @media (min-width: 768px){
    justify-content: space-between;
  }
`;

export const Header = styled.div`
  margin-top:2%;
  width : 100%;
  justify-content: center;
  text-align: center;
  h2 {
    font-family: "PT Sans",sans-serif;
    color: #000;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: start;
  margin-top : 10px;
  padding : 5px;
  width : 100%;
  p{
    margin : 10px 10px 5px 10px;
    font-family: "Open Sans",sans-serif;
    font-size: 1.5em;
    color : #000;
    margin-left: 10px;
    text-align: left;
  }
`;

export const ContainerExit = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  
  span {
    height: 1.2em;
    margin-right: 1.5em;
  }
`;