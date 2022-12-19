import React from 'react';
import "../../styles/first-menu/first-menu.scss"
import {Link} from "react-router-dom";
const FirstMenu = () => {
    return (
        <div className="first-menu">
            <div className="first-menu-header">
                Dictionary
            </div>
            <div className="first-menu-content">
                <Link to={"/login"} className="first-menu-link">
                    Login
                </Link>
                <Link to={"/registration"} className="first-menu-link">
                    Registration
                </Link>
            </div>


        </div>
    );
};

export default FirstMenu;