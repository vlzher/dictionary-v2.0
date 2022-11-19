import React from 'react';
import "../../styles/word-zone/custom-input.scss"
const CustomInput1 = ({placeholder, onChange,value,type,style}) => {
    return (
        <input className="custom-input" style={style} value ={value} type={type} placeholder={placeholder} onChange={onChange}/>
    );
};

export default CustomInput1;