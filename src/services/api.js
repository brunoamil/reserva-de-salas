import firebase from '../services/firebase';

import checks from '../utils/checks';

export default {
  fetchRooms: () => {
    try {
      const rooms = [];
    
      firebase
        .database()
        .ref('salas')
        .on('value', res => {
          res.forEach(doc => {
            if(rooms.indexOf(doc.key) === -1) rooms.push(doc.key)
          })
        })

      // console.log(rooms)
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
  } 
};