import React from 'react';
import {Link} from "react-router-dom";

const StartForm = () => {
    return (
        <div>
            <Link to={"/login"}>
                <div>
                    Login
                </div>
            </Link>
            <Link to={"/registration"}>
                <div>
                    Registration
                </div>
            </Link>
        </div>
    );
};

export default StartForm;