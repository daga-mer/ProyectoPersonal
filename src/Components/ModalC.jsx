import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import C1 from '../Certificados/9215002026707CC1000223610C.pdf';
import C2 from '../Certificados/9221002340065CC1000223610C.pdf';
import C3 from '../Certificados/9402002311258CC1000223610C.pdf';
const ModalC = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <h3>Encuentra todos mis certificados</h3>
      <br/>
      <Button style={{margin:'1%'}} color="primary" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Certificados SENA</ModalHeader>
        <ModalBody>
            <iframe title='C1'style={{ width: '100%', height: '750px'}} src={C1}/><br/>
            <iframe title='C2'style={{ width: '100%', height: '420px'}} src={C2}/><br/>
            <iframe title='C3'style={{ width: '100%', height: '420px'}} src={C3}/>
        </ModalBody>
      </Modal>
    </>
  );
}

export default ModalC;