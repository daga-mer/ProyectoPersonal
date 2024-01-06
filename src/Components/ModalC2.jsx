import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import C1 from '../Certificados/Certificado HTML.pdf';
import C2 from '../Certificados/Certificado HTML5-CSS3.pdf';
import C3 from '../Certificados/Certificado JS.pdf';
const ModalC2 = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Button style={{margin:'1%'}} color="primary" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Otros certificados</ModalHeader>
        <ModalBody>
            <iframe title='C1' style={{ width: '100%', height: '400px'}} src={C1}/><br/>
            <iframe title='C2' style={{ width: '100%', height: '410px'}} src={C2}/><br/>
            <iframe title='C3' style={{ width: '100%', height: '400px'}} src={C3}/>            
        </ModalBody>
      </Modal>
    </>
  );
}

export default ModalC2;