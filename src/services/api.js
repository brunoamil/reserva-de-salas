import firebase from '../services/firebase';

import checks from '../utils/checks';

export default {
  fetchRooms: async () => {
    try {
      const rooms = [];
    
      await firebase
      .firestore()
      .collection("salas")
      .get()
      .then(doc => {
        doc.forEach(room => {
          rooms.push(room.data().nome)
        });
      })
      
      return rooms;
      
    } catch (error) {
      console.log(error);
    }
  },
  fetchDataUser: async email => {
    try {
      const res = {
        name: '',
        sector: ''
      } 

      await firebase
      .firestore()
      .collection("usuarios")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          if (doc.data().email === email) {
            res.name = checks.checkName(doc.data().nome);
            res.sector = doc.data().setor;
          }
        });
      })
      .catch(err => {
        console.log("Erro ao obter o nome e o setor do usuário ", err);
      });
      
      return res;

    } catch (error) {
      console.log(error)
    }
  },
  fetchReserves: async room => {
    const dataReserves = [];
    const request = new Promise(function (resolve) {
      firebase 
      .database()
      .ref(`salas/${room}/Eventos`)
      .on('value', sucesso => {
        let events = [];
        
        sucesso.forEach(doc => {
          const reserves = doc.val()
                    
          for (let value in reserves) {
            if(reserves.hasOwnProperty(value)) {
              const { id, userName, termino, inicio, setor, data } = reserves[value];            
              
              const firstName = checks.checkName(userName);
              if (id && userName) {
                events.push({ id, firstName, termino, inicio, setor, data });
              }
            }
          }
        });
        dataReserves.push(...events)
        resolve()   
      })
    })

    await Promise.all([request]);
    return dataReserves;
  }
};