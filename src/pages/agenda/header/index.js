import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Responsive } from 'semantic-ui-react';

import { Creators as LoadActions } from '../../../store/ducks/load';
import LoadContext from '../../../contexts/LoadContext';

import Select from '../../../components/Select';
import User from '../../../components/User';
import LogoCeuma from '../../../components/Logo';
import Room from './Room';

import {
  Logo,
  Container,
  Title,
  ContainerLeftHeader,
  ContainerRightHeader,
  ContainerLogo,
  UserAling,
  ContainerUser,
  ContainerLogout,
  ViewSelect,
  CustomSelect,
  SelectAling
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
              <LogoCeuma Title={Title} Logo={Logo} />
            </ContainerLogo>
          </ContainerLeftHeader>
          <Room />
          <ContainerRightHeader>
            <Responsive {...Responsive.onlyComputer}>
              <Select 
                ViewSelect={ViewSelect}
                CustomSelect={CustomSelect}
                SelectAling={SelectAling}
              />
            </Responsive>
            {userLogin ?
             <User 
               UserAling={UserAling}
               ContainerUser={ContainerUser}
               ContainerLogout={ContainerLogout}
             /> : <span />}
          </ContainerRightHeader>
        </Container>
      </LoadContext.Provider>
    </>
  );
};

export default Header;
