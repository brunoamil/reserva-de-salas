import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Responsive } from 'semantic-ui-react';

import { Creators as LoadActions } from '../../../store/ducks/load';
import LoadContext from '../../../utils/LoadContext';

import Img from "../../../assets/img/ceuma.png";

import Select from './Select';
import Room from './Room';
import User from './User';

import {
  Logo,
  Container,
  Title,
  ContainerLeftHeader,
  ContainerRightHeader,
  ContainerLogo,
} from "./styles";


const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.user.userLogin);

  const actionLoader = () => (
    dispatch(LoadActions.reserve(true))
  );

  return (
    <>
      <LoadContext.Provider value={{ actionLoader }}>
        <Container>
          <ContainerLeftHeader>
            <ContainerLogo>
              <Logo src={Img}></Logo>
              <Title>Reserva de Salas</Title>
            </ContainerLogo>
          </ContainerLeftHeader>
          <Room />
          <ContainerRightHeader>
            <Responsive {...Responsive.onlyComputer}>
              <Select />
            </Responsive>
            {userLogin ? <User /> : <span />}
          </ContainerRightHeader>
        </Container>
      </LoadContext.Provider>
    </>
  );
};

export default Header;
