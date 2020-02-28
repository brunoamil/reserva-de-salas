import React, { useState, useEffect } from "react";
import firebase from '../../services/firebase';
import moment from "moment";
import {useDispatch} from "react-redux";

import {Creators as RoomActions} from "../../store/ducks/dadosReserva"

import Disponivel from './disponivel'
import Ocupado from './ocupado'

function Inicial() {
  const dispatch = useDispatch();

  const [status, setStatus] = useState('disponivel')
  const [setor, setSetor] = useState('')
  const [evento, setEvento] = useState('')

  var hoje = moment()
  var nowDay = hoje.date()
  var nowMonth = hoje.month()
  var nowHour = hoje.hour()

  useEffect(() => {
    // var statusCheck = setInterval(function () { 
    //   if (condition) {
        
    //   }
    // },60000)

    firebase
      .database()
      .ref(`salas/Auditório/Eventos`)
      .on('value', sucesso => {
        setStatus('disponivel')
        
        sucesso.forEach(doc => {
          var data = doc.val().data

          if ((`${nowDay}/${nowMonth + 1}`) === data) {
            var hora = doc.val().inicio
            var horaFinal = doc.val().termino
            setSetor(doc.val().setor)
            setEvento(doc.val().nomeEvento)

            if ((parseInt(nowHour) >= parseInt(hora)) && ((parseInt(nowHour) < parseInt(horaFinal)))) {
              setStatus('ocupado')
            }

          }
          else{
            setStatus('disponivel')
          }
        });
      })
  })

  dispatch(RoomActions.busy(setor, evento))
  // console.log(useSelector(state=> state.ReserveData))

  return (
    <>
      {status === 'disponivel' ?
        <Disponivel></Disponivel>
        :
        <Ocupado></Ocupado>
      }
    </>
  )
}
export default Inicial