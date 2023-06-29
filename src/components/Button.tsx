import React from "react";

interface Props {
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    onClick: () => void;
}

const Button = ({onClick, color='primary'}) => {
    return(
        <button onClick={onClick} className={'btn btn-' + color}>Alert</button>
    )
}

export default Button;