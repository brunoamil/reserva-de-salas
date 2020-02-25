import firebase from '../services/firebase';

import checkName from '../utils/checkName';

export default {
  fetchRooms: async () => {
    try {
      const rooms = [];
    
      await firebase
        .database()
        .ref('salas')
        .on('value', res => {
          res.forEach(doc => {
            rooms.push(doc.key)
          })
        })

      console.log(rooms)
      return '';
    } catch (error) {
      console.log(error);
    }
  },
  fetchDataUser: email => {
    try {
      firebase
      .firestore()
      .collection("usuarios")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          if (doc.data().email === email) {
            return {name: checkName(doc.data().nome), setor: doc.data().setor}
          }
        });
      })
      .catch(err => {
        console.log("Erro ao obter o nome e o setor do usuário ", err);
      });
    } catch (error) {
      console.log(error)
    }
  } 
};