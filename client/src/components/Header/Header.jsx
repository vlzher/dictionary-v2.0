import React, {useState} from 'react';
import "../../styles/header/header.scss"
import CustomButton1 from "./CustomButton1";
import Language from "../../assets/language.svg";
import Menu from "../../assets/menu.svg"
import Logout from "../../assets/logout.svg"
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useActions} from "../../hooks/useActions";
import CustomModal from "../CustomModal";
const Header = () => {
    const user = useSelector(state => state.user)
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
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
                <CustomModal show={show}
                             setShow={setShow}
                             handleShow={handleShow}
                             submitFunc={logout1}
                             isStatic={true}
                             bodyText={"Do you want to logout?"}
                             secButtTxt={"Cancel"}
                             primButtTxt={"Logout"}
                />
                <div className="right-div">
                    <div className="header-username">{user.username}</div>
                    <CustomButton1  url={Logout} onClick={() => handleShow()}/>

                </div>
            </div>

        </div>
    );
};

export default Header;