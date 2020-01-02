import styled from "styled-components";
import { Icon } from "semantic-ui-react";

export const Container = styled.div``;

export const HeaderModalContent = styled.div`
  width: 100%;
  height: 10vh;
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.2em;
  border-bottom: 3px solid #0080ff;
  color: #000;
`;

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin: 20px 30px 15px 30px;
  border-radius: 7px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DescContent = styled.div`
  float: right;
  margin-left: -15px;
  form {
    label {
      font-size: 1.2em;
      margin-bottom: 4px;
    }
    input {
      width: 100%;
      outline: 0 !important;
    }
  }
`;

export const HourContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  P {
    font-size: 1.2em;
    margin-top: 10px;
  }
  div {
    margin-bottom: 1px;
    display: flex;
    flex-direction: row;
    align-items: center;
    p {
      font-size: 1.2em;
    }
    div {
      margin-bottom: 2.7px;
      font-size: 1.1em;
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-flow: column;
    }
  }
`;

export const CustomIcon = styled(Icon)`
  margin: 0 !important;
`;

export const PointHourContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 3px 0px -7px;
`;

export const ZeroHourContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContainerButton = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
