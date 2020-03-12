import styled from 'styled-components'

export const Container = styled.div`
  height: 85vh;
  margin-top: 5px;
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

    margin: 4px 0px;

    @media (min-width: 425px) {
      height: 90px;
      margin: 5px 0px;

    }

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

  @media (min-width: 425px) {
    width: 10%;
    height: 55px;
  }
`;

export const ContainerCell = styled.div`
  width: 89%;
  height: 100%;
  border-radius: 2px 0px 0px 2px;
  

  background-color : #fff;

  @media (min-width: 425px) {
    width: 94%;
  }
`;