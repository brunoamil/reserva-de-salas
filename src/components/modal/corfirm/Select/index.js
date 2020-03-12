import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import firebase from "../../../../services/firebase";
import {Select} from "semantic-ui-react";

import { CustomSelect } from '../styles';

import { Creators as ReserveDataActions } from '../../../../store/ducks/dadosReserva';

const SelectHora = ({ room, date, inicialHour, id, dayOfWeek }) => {
  const dispatch = useDispatch();

  const [selectHour, setSelectHour] = useState([]);
  const [horasDisp, setHorasDisp] = useState([]);

  const actionFinalHour = (e, {value})  => {    
    dispatch(ReserveDataActions.final_hour(value));
  };

  const funcSelect = useCallback((limitHour, inicialHour) => {
    const horas = [
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00"
    ];

    if (!limitHour) {
      setSelectHour(e => horas.filter(hour => hour > inicialHour));

    } else {
      setSelectHour(e =>
        horas.filter(hour => hour > inicialHour && hour <= limitHour.inicio)
      );
    }
  }, [])

  useEffect(() => {
    const getReserve = async () => {
      let arrReserve = [];

      firebase
        .database()
        .ref(`salas/${room}/Eventos/${dayOfWeek}`)
        .orderByValue()
        .on('value',item => {
          item.forEach(doc => {
            const reserve = doc.val();

            if (date === reserve.data) {
              arrReserve.push(reserve);
            }
          })
        })

      let limitHour = arrReserve.filter(
        reserve => parseInt(reserve.id) > parseInt(id)
      )[0];

      funcSelect(limitHour, inicialHour);
    }

    getReserve();
  }, [id, date, inicialHour, room, funcSelect, dayOfWeek]);

  useEffect(() => {
    var arrDisp = []

    for (var index in selectHour) {

      arrDisp.push({ key: selectHour[index], value: selectHour[index], text: ` Das ${inicialHour} às ${selectHour[index]}` })
      setHorasDisp(arrDisp)
    }

  }, [selectHour, inicialHour])
  return (
    <>
      {/* <CustomSelect fluid onChange={actionFinalHour} 
      placeholder='selecione' 
      options={horasDisp}/> */}

      <CustomSelect
        placeholder="Escolha o horário"
        control={Select}
        options={horasDisp}
        fluid 
        onChange={actionFinalHour} 
      >

      </CustomSelect>
    </>
  )
}

export default React.memo(SelectHora);
