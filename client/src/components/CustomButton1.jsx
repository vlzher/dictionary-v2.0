import React from 'react';
import "../styles/custom-button1.scss"
const CustomButton1 = ({url, onClick,style}) => {
    return (
        <button className="custom-button1" style={{backgroundImage: `url(${url})`}}></button>

    );
};

export default CustomButton1;