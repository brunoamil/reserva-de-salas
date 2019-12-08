import React, { useState } from "react";
import firebase from '../../config/firebase';
import 'firebase/auth';
import { Button, Modal } from "react-bootstrap";
import "../ModalUsuario/App2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../../assets/ceuma.png";


const App = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function Logar() {
    firebase.auth().signInWithEmailAndPassword(email,senha).then(resultado=>{
      alert('Sucesso');
    }).catch(erro=>{
      alert('erro ao logar');
    })
  }

  function Cadastrar() {
    firebase.auth().createUserWithEmailAndPassword(email,senha).then(resultado=>{
      handleClose()
    })
  }

  return (
    <>
      <div align="center" className="mt-5">
        <Button onClick={handleShow}>Login</Button>
        <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="example-modal-sizes-title-lg" centered="true" >
          <Modal.Header closeButton>
            <Modal.Title align="center" className="row col-xs-12 col-sm-12 col-md-12 col-lg-12" >
              <img src={img} width="43" height="43" alt="Header Ceuma" />
              <h2 className="text-muted">- Ceuma Reservas</h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body align="center">
            <form className="sing-form">
              <div className="form-group">
                <label for="exampleInputEmail1">Endereço de email</label>
                <input onChange={(e)=> setEmail(e.target.value)} type="email" className="form-control" id="inputmodal1" aria-describedby="emailHelp" placeholder="Seu email"/>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Senha</label>
                <input onChange={(e)=> setSenha(e.target.value)} type="password" className="form-control" id="inputmodal1" placeholder="Senha"/>
              </div>

              <button onClick={Logar} type="button" className="btn btn-primary"> Login </button>
            </form>
          </Modal.Body>
        </Modal>


        {/*cadastro*/}
        <Button className="ml-3" onClick={handleShow}>Cadastro</Button>
        <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="example-modal-sizes-title-lg" centered="true" >
          <Modal.Header closeButton>
            <Modal.Title align="center" className="row col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <img src={img} width="43" height="43" alt="Header Ceuma" />
              <h2 className="text-muted">- Ceuma Reservas</h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body align="center">
            <form className="sing-form">
              <div className="form-group">
                <label for="exampleInputEmail1">Endereço de email</label>
                <input onChange={(e)=> setEmail(e.target.value)} type="email" className="form-control" id="inputmodal1" aria-describedby="emailHelp" placeholder="Seu email"/>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Senha</label>
                <input onChange={(e)=> setSenha(e.target.value)} type="password" className="form-control" id="inputmodal1" placeholder="Senha" />
              </div>

              <button onClick={Cadastrar} type="button" className="btn btn-primary"> Cadastrar </button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default App;
