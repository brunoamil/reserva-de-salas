import React, { useState } from "react";
import { Button } from "reactstrap";
import Modal from "./index";

const App = props => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const [nestedModal, setNestedModal] = useState(false);

  const [modalConf, setModalConf] = useState(false);

  const toggle = () => {
    setModal(!modal);
    setNestedModal(false);
  };

  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setModal(false);
  };

  const toggleAll = () => {
    setNestedModal(false);
    setModal(false);
    setModalConf(false);
  };

  const toggleModalConf = () => {
    setModalConf(!modalConf);
    setNestedModal(false);
    setModal(false);
  };

  return (
    <>
      <Button color="primary" size="lg" onClick={toggle}>
        Login
      </Button>
      <Modal
        className={className}
        modal={modal}
        nestedModal={nestedModal}
        toggle={toggle}
        toggleNested={toggleNested}
        toggleAll={toggleAll}
        toggleModalConf={toggleModalConf}
        modalConf={modalConf}
      />
    </>
  );
};

export default App;
