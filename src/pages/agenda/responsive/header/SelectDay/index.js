import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';

import {ContainerDay, ContainerSelect} from '../styles';

import { daysOfWeekMobile } from '../../../../../utils/TimeConfig';
import toggleId from '../../../../../utils/toggleId';
import checks from '../../../../../utils/checks';
import LoadContext from '../../../../../contexts/LoadContext';

import { Creators as ReserveActions } from '../../../../../store/ducks/dadosReserva';

const SelectDay = () => {
  const { actionLoader } = useContext(LoadContext);
  const dispatch = useDispatch();

  const actionId = day => {
    dispatch(ReserveActions.idMobile(toggleId(day)));
    dispatch(ReserveActions.dateMobile(checks.splitDate(day)[1]));
    dispatch(ReserveActions.dayOfWeek(checks.splitDate(day)[0]));
    actionLoader();
  }

  return (
    <ContainerDay>
      <ContainerSelect>
        <select onChange={e => actionId(e.target.value)}>
          {daysOfWeekMobile.map( (day, index) => (
            <option key={index} value={day}>{day}</option>
          ))}
        </select>
      </ContainerSelect>
    </ContainerDay>
  )
}

export default SelectDay;
