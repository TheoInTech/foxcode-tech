import React from 'react'
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import './FCButton.scss';

const FCButton = ({ ...props }) => {
    const { children, className } = props;
    return (
        <Button {...props} className={`${className} fc-button`}>{children}</Button>
    )
}

FCButton.defaultProps = {
    onClick: () => {}
};

FCButton.propTypes = {
    onClick: PropTypes.func
};

export default FCButton;
