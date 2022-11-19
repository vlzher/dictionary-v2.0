import React from 'react';
import "../../styles/header/header.scss"
import CustomButton1 from "./CustomButton1";
import Language from "../../assets/language.svg";
import Menu from "../../assets/menu.svg"
import Logout from "../../assets/logout.svg"
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useActions} from "../../hooks/useActions";
const Header = () => {
    const user = useSelector(state => state.user)
    const navigate = useNavigate()
    const {logout} = useActions()

    function logout1() {
        logout()
        navigate('/login')
    }

    return (
        <div>
            <div className="header">
                <div className="left-div">
                    <CustomButton1 url={Menu} />
                    <CustomButton1 url={Language} />

                </div>

                <div className="right-div">
                    <div className="header-username">{user.username}</div>
                    <CustomButton1  url={Logout} onClick={() => logout1()}/>

                </div>
            </div>

        </div>
    );
};

export default Header;