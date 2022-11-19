import React from 'react';
import "../../styles/header/custom-button1.scss"
const CustomButton3 = ({style, txt, onClick}) => {
    return (
        <button style={style} onClick={onClick} className="custom-button">{txt}</button>
    );
};

export default CustomButton3;