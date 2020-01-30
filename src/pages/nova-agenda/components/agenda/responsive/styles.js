import styled from 'styled-components';

export const ContainerDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 10vh;
  width: 100%;

  background-color: #ececec;
`;

export const ContainerSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  padding: 10px 0px;

  background-color: #0d4b81;
  select{
    width: 100%;

    border: none;
    outline: none;
    background-color: #0d4b81;
  
    :optional{
      border: none;
      color: #fff;
  
    }
  }
  
`;


export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ececec;

  span{
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;
    height: 10vh;

    margin: 2px 0px;


  }
`;

export const ContainerHour = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.1em;

  width: 15%;
  height: 45px;
  border-radius : 0px 50px 50px 0px;
  margin-right: -10px;

  z-index: 1;

  background-color: #0d4b81;
  color: #fff;
`;

export const ContainerCell = styled.div`
  width: 89%;
  height: 100%;
  border-radius: 2px 0px 0px 2px;
  

  background-color : #fff;
`;