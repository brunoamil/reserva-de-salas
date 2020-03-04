import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Icon } from 'semantic-ui-react';

import { Creators as UsersActions } from '../../store/ducks/users';
import { Creators as RoomActions }  from '../../store/ducks/salas';

import LoadContext from '../../contexts/LoadContext';

const User = ({ UserAling, ContainerUser, ContainerLogout }) => {
  const { actionLoader } = useContext(LoadContext)
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);
  
  const actionLogout = () => {
    actionLoader();
    setTimeout(() => {
      dispatch(UsersActions.log_out());
      dispatch(RoomActions.roomEvents([]));
      dispatch(UsersActions.getSuccessName(''))
    }, 1000);
  };

  return (
    <>
      <UserAling>
        <Icon color='black' name='user circle' size='big'></Icon>
        <ContainerUser>
          <h1>{user.userName}</h1>
          <h2>{user.userSector}</h2>
        </ContainerUser>
        <ContainerLogout>
          <Icon name='sign-out' size='large' onClick={actionLogout}></Icon>
        </ContainerLogout>
      </UserAling>
    </>
  )
}

export default React.memo(User)
