import React from 'react';
import "../../styles/word-zone/custom-input.scss"
import {HiCheckCircle} from "react-icons/hi";
const CustomInput1 = ({placeholder, onChange,value,type,style, onKeyDown,isIcon,iconFunc}) => {
    return (

        <div className="custom-input">
            <input
                className="custom-input-inner"
                style={style}
                value ={value}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                onKeyDown={onKeyDown}>
            </input>
            {isIcon ? <HiCheckCircle className={'icon'} onClick={()=> iconFunc()}/> : null}
        </div>

    );
};

export default CustomInput1;