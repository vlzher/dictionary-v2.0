import React, {useState} from 'react';
import AddWordModal from "./AddWordModal";
import Header from "./Header";
import {useSelector} from "react-redux";

const HeaderModal = () => {
    const user = useSelector(state => state.user)
    const [activeModal, setActiveModal] = useState(false);

    return (
        <div>
            <AddWordModal activeModal={activeModal} setActiveModal={setActiveModal}  />
            <Header username={user.username} funcButton={() => setActiveModal(true)}/>
        </div>
    );
};

export default HeaderModal;