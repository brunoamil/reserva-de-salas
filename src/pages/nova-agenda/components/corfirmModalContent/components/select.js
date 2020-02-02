import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { CustomOption } from '../styles';

const Select = ({ db, room, date, inicialHour, id }) => {
  const dispatch = useDispatch();

  // const [finalHour, setFinalHour] = useState();
  const [selectHour, setSelectHour] = useState([]);

  const actionFinalHour = finalHour => {
    dispatch({ type: "SET_HORA_FINAL", finalHour });
    // setFinalHour(finalHour);
  };

  useEffect(() => {
    const getReserveId = async () => {
      let arrReserve = [];

      await db
        .collection("salas")
        .doc(`${room}`)
        .collection("Eventos")
        .orderBy("posReserva", "asc")
        .get()
        .then(item =>
          item.forEach(doc => {
            if (date === doc.data().data) {
              arrReserve.push(doc.data());
            }
          })
        );

      let limitHour = arrReserve.filter(
        reserve => parseInt(reserve.id) > parseInt(id)
      )[0];

      if (!arrReserve.length) {
        setSelectHour(horas.filter(hour => hour > inicialHour));
      } else {
        setSelectHour(
          horas.filter(hour => hour > inicialHour && hour <= limitHour.inicio)
        );
      }
    };

    getReserveId();
  }, );

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
    "18:00"
  ];

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

export default Select;
