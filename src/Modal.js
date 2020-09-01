import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    borderRadius: "10px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
};

Modal.setAppElement("#root");

export function ModalWindow(props) {
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2>Сoordinates of the selected area: </h2>
      <p>{JSON.stringify(props.text)}</p>
      <button onClick={props.closeModal}>close</button>
    </Modal>
  );
}
