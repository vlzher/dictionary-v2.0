import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const CustomModal = ({show,setShow,submitFunc,isStatic,bodyText,secButtTxt,primButtTxt}) => {
    const handleClose = () => setShow(false);


    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop={isStatic ? "static" : true}
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Logout</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {bodyText}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        {secButtTxt}
                    </Button>
                    <Button variant="primary" onClick={() => submitFunc()}>
                        {primButtTxt}
                    </Button>
                </Modal.Footer>
            </Modal>
            </>
    );
};

export default CustomModal;