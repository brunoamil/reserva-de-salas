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
  const [inicio, setInicio] = useState('')
  const [termino, setTermino] = useState('')

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
      .ref(`salas/Sala 1/Eventos`)
      .on('value', sucesso => {
        setStatus('disponivel')
        // console.log();
        
        sucesso.forEach(doc => {
          // setStatus('disponivel')
          var data = doc.val().data
          
          if ((`${nowDay}/${nowMonth + 1}`) === data) {
            var hora = doc.val().inicio
            var horaFinal = doc.val().termino
            setSetor(doc.val().setor)
            setInicio(doc.val().inicio)
            setTermino(doc.val().termino)
            
            if ((parseInt(nowHour) >= parseInt(hora)) && ((parseInt(nowHour) < parseInt(horaFinal)))) {
              setStatus('ocupado')
              // console.log(status);
              
            }
            else{
              setStatus('disponivel')
            }

          }
        });
      })
  })

  dispatch(RoomActions.busy(setor, inicio, termino))
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