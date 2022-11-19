import React from 'react';
import "../../styles/login-registration/input2.scss"
const CustomInput2 = ({header, value,onChange,type,placeholder,isRequired}) => {
    return (
        <div className="custom-input2-zone">
            <div className={"custom-input2-header"}>
                <div className="custom-input2-header-text">
                    {header}
                </div>
                <div className={isRequired ? "custom-input2-header-required active": "custom-input2-header-required"}>
                    *
                </div>
            </div>
            <div className="input-zone2">
                <input
                    value={value}
                    onChange={onChange}
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