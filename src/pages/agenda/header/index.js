import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import firebase from "../../../services/firebase";
import { Responsive } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

// import Img from "../../../assets/img/ceuma.png";

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
  ContainerVoltar,
  ButtonVoltar,
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

// import { Creators as LoadActions } from '../../../store/ducks/';
import { Creators as UsersActions } from '../../../store/ducks/users';
import { Creators as RoomsActions } from '../../../store/ducks/salas';


const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.user.userLogin);

  const actionLoader = () => (
    dispatch(LoadActions.reserve(true))
  );
  const actionLogout = () => {
    setTimeout(() => {
      dispatch(UsersActions.log_out());
      dispatch(RoomsActions.roomEvents([]));
      dispatch(UsersActions.getSuccessName(''))
    }, 1000);
  };

  return (
    <>
      <LoadContext.Provider value={{ actionLoader }}>
        <Container>
          <ContainerLeftHeader>
            <ContainerVoltar>
              <Link to='/'>
                <ButtonVoltar name='arrow left' size='large' color='black' onClick={actionLogout}></ButtonVoltar>
              </Link>
            </ContainerVoltar>
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
              /> : ''}
          </ContainerRightHeader>
        </Container>
      </LoadContext.Provider>
    </>
  );
};

export default Header;
