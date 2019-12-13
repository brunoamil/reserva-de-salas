import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

function ModalView(props) {
  if (props.frameless) {
    return (
      <div className="nude">
        <a onClick={props.closeFunc} className="close">
          X
        </a>
        <div className="title"> {props.title}</div>
        {props.children}
      </div>
    );
}

  return (
    <div className="modal">
      <a onClick={props.closeFunc} className="close">
        X
      </a>
      <div className="title"> {props.title}</div>
      {props.children}
    </div>
  );
}

export default function Modal(props) {
  const modalWrapperTarget = document.createElement("div");
  modalWrapperTarget.className = "wrapper";

  useEffect(() => {
    modalWrapperTarget.addEventListener("click", clickedOutside);
    modalWrapperTarget.addEventListener("keydown", clickedOutside, true);

    document.body.appendChild(modalWrapperTarget);
    _render();

    return () => {
      modalWrapperTarget.removeEventListener("click", clickedOutside);
      modalWrapperTarget.removeEventListener("keydown", clickedOutside);
      ReactDOM.unmountComponentAtNode(modalWrapperTarget);
      document.body.removeChild(modalWrapperTarget);
    };
  });

  const clickedOutside = e => {
    if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
      e.preventDefault();
      props.clickOutside(e);
      return false;
    }

    if (props.clickOutside && e.target.classList.contains("wrapper")) {
      props.clickOutside(e);
    }
  };

  const closeFunc = e => {
    if (props.clickOutside) {
      props.clickOutside(e);
    }
  };

  const _render = () => {
    ReactDOM.render(
      <ModalView
        children={props.children}
        closeFunc={closeFunc}
        frameless={props.frameless}
      />,
      modalWrapperTarget
    );
  };

  useEffect(() => {
    _render();
  }, []);

  return <noscript />;
}
