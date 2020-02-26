import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Creators as LoadActions } from '../../../../store/ducks/load';
import LoadContext from '../../../../utils/LoadContext';

import Select from '../../../../components/Select';
import User from '../../../../components/User';
import LogoCeuma from '../../../../components/Logo';
import SelectDay from  './SelectDay';

import {
  Logo,
  Header,
  Title,
  Container,
  View,
  ContainerHeader,
  ContainerLeftHeader,
  ContainerLogout,
  UserAling,
  ContainerUser,
  CustomSelect,
  SelectAling,
  ViewSelect,
} from "./styles";


export const HeaderMobile = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.user.userLogin);

  const actionLoader = () => (
    dispatch(LoadActions.reserve(true))
  );

  return (
    <>
      <LoadContext.Provider value={{ actionLoader }}>
        <Header>
          <Container>
            <View>
              <ContainerHeader>
                <ContainerLeftHeader>
                  <LogoCeuma Title={Title} Logo={Logo} />
                </ContainerLeftHeader>
              </ContainerHeader>
              {userLogin && <User 
                UserAling={UserAling}
                ContainerUser={ContainerUser}
                ContainerLogout={ContainerLogout}
              />}
            </View>
            <Select 
              ViewSelect={ViewSelect}
              CustomSelect={CustomSelect}
              SelectAling={SelectAling}
            />
          </Container>
        </Header>
        <SelectDay />
      </LoadContext.Provider>
    </>
  );
};

export default HeaderMobile;