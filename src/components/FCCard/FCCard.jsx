import React from 'react'
import Card from 'react-bootstrap/Card';
import './FCButton.scss';

const FCCard = ({ ...props }) => {
    const { children, className } = props;
    return (
        <Card {...props} className={`${className} fc-card`} >{children}</Card>
    )
}

export default FCCard;
