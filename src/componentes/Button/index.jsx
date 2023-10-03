import React from "react";

const Button = ({ type, children, customization, onClick }) => {
    return (
        <button type={type} className={customization} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
