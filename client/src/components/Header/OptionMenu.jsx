import React from 'react';
import "../../styles/header/option-menu.scss"



const OptionMenu = ({active, setActive}) => {
    return (
        <div className={active ? "option-menu active" : "option-menu"} onClick={()=>setActive(false)}>
            <div
                className={active ? "option-menu-content active" : "option-menu-content"}
                 onClick={(e) => e.stopPropagation()}
            >
                <div className="collections">
                    <div className="collections-title">
                        Collections
                    </div>

                </div>

            </div>
        </div>
    );
};

export default OptionMenu;