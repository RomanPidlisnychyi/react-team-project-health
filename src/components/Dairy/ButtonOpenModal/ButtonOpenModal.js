import React from 'react';
import Button from '../../Button/Button';

const ButtonOpenModal = ({ disabled, onClick }) => {
    return (<>
        { !disabled && <Button disabled={disabled} onClick={onClick} title="+" />}
    </>
    )
}

export default ButtonOpenModal;