import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;

`;

export const Header = styled.div`
  width : 50%;
  padding: 10px;
  justify-content: center;
  text-align: center;

  h2{
    font-family: "PT Sans",sans-serif;
    color: #000;
    border-bottom : 3px solid #0d4b81;
  }
`;

export const Section = styled.div`
  display : grid;
  grid-template-columns : repeat(2, 1fr);

  margin-top : 10px;

  p{
    font-family: "Open Sans",sans-serif;
    font-size: 1.5em;
    color : #000;
  }



`;

export const ContainerEvento = styled.div`
  display : flex;
  justify-content : center;
  align-items: center;

  width : 100%;

  p{
    font-family: "Open Sans",sans-serif;
    font-size: 1.7em;
    color : #000;
  }

`;
