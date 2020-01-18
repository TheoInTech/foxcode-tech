import React from 'react'
import Button from 'react-bootstrap/Button';
import './FCButton.scss';

const FCButton = ({ ...props }) => {
    const { children, className, onClick } = props;
    return (
        <Button {...props} className={`${className} fc-button`} onClick={() => onClick()}>{children}</Button>
    )
}

export default FCButton;
