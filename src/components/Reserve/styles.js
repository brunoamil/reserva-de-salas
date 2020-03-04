import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      width: 85%;
      height: 20%;
      text-align: center;
      font-size: 1.5em;
      font-weight: bold;
      font-family: 'Arial';
    }
  
    div {
      display: flex;
      justify-content: flex-end;
  
      width: 15%;
  
      span {
      background: #a52a2a !important;
      width: 5em;
      margin: 0 !important;
  
      border-radius: 100px 0px 0px 100px;
      background: #fff;
      }
    }
  }

  width:  100%;
  height: 100%;
  border-bottom: 10px #a52a2a solid;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: #000;
    font-size: 16px;
    font-weight: bold;  
  }

`;