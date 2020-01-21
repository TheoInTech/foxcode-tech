import React, { useState, useEffect } from 'react'
import Toast from 'react-bootstrap/Toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './FCToast.scss';


const FCToast = ({ show, icon, title, message }) => {
    const [showState, setShow] = useState(show);
  
    useEffect(() => {
        setShow(show)
    }, [show])

    return (
        <div className="fc-toaster">
            <Toast onClose={() => setShow(false)} show={showState} delay={8000} autohide className="position-relative">
            <Toast.Header className="fc-toaster__header">
                <FontAwesomeIcon icon={icon} />&nbsp;<strong className="mr-auto">{title}</strong>
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>
            </Toast>
        </div>
    );
}
  
export default FCToast
