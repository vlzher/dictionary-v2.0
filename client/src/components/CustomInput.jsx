import React from 'react';
import "../styles/custom-input.scss"
const CustomInput = ({placeholder, onChange,value,type,style}) => {
    return (
        <input className="custom-input" style={style} value ={value} type={type} placeholder={placeholder} onChange={onChange}/>
    );
};

export default CustomInput;