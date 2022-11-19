import React from 'react';
import "../../styles/login-registration/custom-button2.scss"
const CustomButton2 = ({onClick,text}) => {
    return (
        <button className="button2" onClick={onClick}>{text}</button>
    );
};

export default CustomButton2;