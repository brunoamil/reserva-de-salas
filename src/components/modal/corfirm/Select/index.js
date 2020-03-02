import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import firebase from "../../../../services/firebase";

import { CustomOption } from '../styles';

import { Creators as ReserveDataActions } from '../../../../store/ducks/dadosReserva';

const Select = ({ room, date, inicialHour, id }) => {
  const dispatch = useDispatch();

  const [selectHour, setSelectHour] = useState([]);

  const actionFinalHour = finalHour => {
    dispatch(ReserveDataActions.final_hour(finalHour));
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
        .ref(`salas/${room}/Eventos`)
        .on('value',item=>{
          item.forEach(doc => {
            console.log(doc.val());
            
            if (date === doc.val().data) {
              arrReserve.push(doc.val());
            }
          })
        })
    
      let limitHour = arrReserve.filter(
        reserve => parseInt(reserve.id) > parseInt(id)
      )[0];

      funcSelect(limitHour, inicialHour);
    }

    getReserve();
  }, [id, date, inicialHour, room, funcSelect]);

  return (
    <>
      <select
        onChange={e => actionFinalHour(e.target.value)}
        defaultValue={"DEFAULT"}
      >
        <CustomOption key="10" disabled hidden value="DEFAULT">
          horas
        </CustomOption>
        {selectHour.map(hour => (
          <option key={hour}>{hour}</option>
        ))}
      </select>
    </>
  )
}

export default React.memo(Select);
