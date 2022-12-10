import React from 'react';
import './modal.css';

const Modal = ({ children, modal, setModal }) => {
  return (
    <div className={`${modal ? 'modalBackground_visible' : 'modalBackground'}`}>
      <div className="modal">{children}</div>
    </div>
  );
};

export default Modal;
