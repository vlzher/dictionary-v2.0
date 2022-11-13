import React from 'react';
import "../styles/header.scss"
import {useActions} from "../hooks/useActions";
import CustomButton1 from "./CustomButton1";
import Language from "../assets/language.svg";
import Menu from "../assets/menu.svg"
import Logout from "../assets/logout.svg"
const Header = ({username,funcButton}) => {
    const {removeWord} = useActions()

    return (
        <div>
            <div className="header">
                <div className="left-div">
                    <CustomButton1 url={Menu} />
                    <CustomButton1 url={Language} />

                </div>

                <div className="right-div">
                    <div className="header-username">{username.toUpperCase()}</div>
                    <CustomButton1  url={Logout}/>

                </div>
            </div>

        </div>
    );
};

export default Header;