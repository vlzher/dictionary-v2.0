import React from 'react';
import "../styles/custom-button1.scss"
const CustomButton2 = ({style, txt, onClick}) => {
    return (
        <button style={style} onClick={onClick} className="custom-button">{txt}</button>
    );
};

export default CustomButton2;