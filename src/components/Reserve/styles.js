import styled from 'styled-components';
import { Segment } from 'semantic-ui-react'; 

export const Container = styled(Segment)`
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;

    /* display: flex;
    align-items: center;
    justify-content: center; */
    h1 {
      /* width: 85%; */
      /* height: 20%; */
      text-align: center;
      font-size: 1.3em;
      font-weight: bold;
      font-family: sans-serif;
      margin: 0 !important;
      position: absolute;
      top: 35%;
      left: 40%;
    }
  }
  
  @media (min-width: 768px) {
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
  }
`;