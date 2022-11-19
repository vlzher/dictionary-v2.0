import React from 'react';
import "../../styles/header/custom-button1.scss"
const CustomButton1 = ({url, onClick}) => {
    return (
        <button className="custom-button1" onClick={onClick} style={{backgroundImage: `url(${url})`}}></button>

    );
};

export default CustomButton1;