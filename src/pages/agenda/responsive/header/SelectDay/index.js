import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';

import {ContainerDay, ContainerSelect} from '../styles';

import { dias } from '../../../../../utils/TimeConfig';
import toggleId from '../../../../../utils/toggleId';
import LoadContext from '../../../../../utils/LoadContext';

import { Creators as ReserveActions } from '../../../../../store/ducks/dadosReserva';

const SelectDay = () => {
  const { actionLoader } = useContext(LoadContext)
  const dispatch = useDispatch();

  const actionId = day => {
    dispatch(ReserveActions.idMobile(toggleId(day)))
    actionLoader();
  }

  return (
    <ContainerDay>
      <ContainerSelect>
        <select onChange={e => actionId(e.target.value)}>
          {dias.map((day, index) => (
            <option key={index}>{day}</option>  
          ))}
        </select>
      </ContainerSelect>
    </ContainerDay>
  )
}

export default SelectDay;
