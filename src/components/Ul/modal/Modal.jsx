import React from 'react';
import './modal.css';

const Modal = ({ children, modal, setModal }) => {
  return (
    <div
      className={`${modal ? 'modalBackground_visible' : 'modalBackground'}`}
      onClick={() => setModal(false)}
    >
      <div
        className="modal"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
