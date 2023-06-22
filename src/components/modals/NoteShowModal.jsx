import React from "react";
import { Modal } from "react-bootstrap";

const NoteShowModal = ({ item, showModal, handleCloseModal }) => {
  return (
    <div>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>The Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{item.note}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleCloseModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NoteShowModal;
