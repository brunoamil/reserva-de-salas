import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import {ContainerDay, ContainerSelect} from '../styles';

import { daysOfWeek, days } from '../../../../../utils/TimeConfig';
import toggleId from '../../../../../utils/toggleId';
import checks from '../../../../../utils/checks';
import LoadContext from '../../../../../utils/LoadContext';

import { Creators as ReserveActions } from '../../../../../store/ducks/dadosReserva';

const SelectDay = () => {
  const { actionLoader } = useContext(LoadContext);
  const dispatch = useDispatch();
  
  let now = moment();
  const currentDay = now.date();

  const actionId = day => {
    dispatch(ReserveActions.idMobile(toggleId(day)));
    dispatch(ReserveActions.dateMobile(checks.splitDate(day)[1]));
    actionLoader();
  }

  return (
    <ContainerDay>
      <ContainerSelect>
        <select onChange={e => actionId(e.target.value)}>
          {days.filter((day) => day >= currentDay)
            .map(((day, index) => (
                daysOfWeek.filter(date => {
                  let dayofweek = checks.splitDate(date)[1];
                  return checks.splitNumberDate(dayofweek) === day;
                }).map((optionDay, index) => {
                  if (optionDay.lenght !== 0) {
                    return (
                      <option key={index} value={optionDay}>{optionDay}</option>
                    )
                  } 
                })
              )
          ))}
        </select>
      </ContainerSelect>
    </ContainerDay>
  )
}

export default SelectDay;
