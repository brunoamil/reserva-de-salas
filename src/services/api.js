import firebase from '../services/firebase';

const getRooms = () => {
  const salas = [];
  
  firebase
    .firestore()
    .collection("salas")
    .get()
    .then(sucesso => {
      sucesso.forEach(doc => {
        salas.push(doc.data().nome);
      });
    })
    .catch(erro => {
      console.log("Erro ao pegar salas", erro);
    });

  return salas;
};

export { getRooms };