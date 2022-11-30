import React from 'react';
import "../../styles/login-registration/input2.scss"
const CustomInput2 = ({header, value,onChange,type,placeholder,isRequired,onFocus}) => {
    return (
        <div className="custom-input2-zone">
            <div className={"custom-input2-header"}>
                <p className="custom-input2-header-text">
                    {header}
                    {{isRequired}
                    ?
                    <span style={{color:"#F16482",whiteSpace:"pre"}}> *</span>
                    :<span></span>}


                </p>
            </div>
            <div className="input-zone2">
                <input
                    value={value}
                    onChange={onChange}
                    onFocus={onFocus}
                    type={type}
                    placeholder={placeholder}
                    className= "input2"
                />
                <div className={value==="password" ?"password-button active": "password-button"}>

                </div>
            </div>

        </div>
    );
};

export default CustomInput2;
