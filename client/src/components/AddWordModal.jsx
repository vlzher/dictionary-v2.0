import React, {useState} from 'react';
import '../styles/word-modal.scss'
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton1";
import {useActions} from "../hooks/useActions";
import {useKey} from "../hooks/useKey";
const AddWordModal = ({activeModal,setActiveModal}) => {
    const {addWord} = useActions();
    const [word,setWord] = useState("");
    const [description1,setDescription1] = useState("");
    const [description2,setDescription2] = useState("");
    const buttonFunc = () => {
        if(word && description1 && activeModal){
            addWord({word: word, description1:description1, description2:description2});
            setWord("")
            setDescription1("")
            setDescription2("")
            setActiveModal(false)
        }
    }
    // eslint-disable-next-line
    const enterHandler = useKey("Enter",buttonFunc)
    return (
        <div className={activeModal ? "word-modal active" : "word-modal"} onClick={()=>setActiveModal(false)}>
            <div className={activeModal ? "word-modal-content active" : "word-modal-content"} onClick={e => e.stopPropagation()}>
                <div className="input-zone">
                    <CustomInput
                        value={word}
                        onChange={(e)=>setWord(e.target.value)}
                        placeholder={"Word"}
                        type="text"
                    />
                    <CustomInput
                        value={description1}
                        onChange={(e)=>setDescription1(e.target.value)}
                        placeholder={"Description 1"}
                        type="text"
                    />
                    <CustomInput
                        value={description2}
                        onChange={(e)=> setDescription2(e.target.value)}
                        placeholder={"Description 2"}
                        type="text"
                    />
                </div>
                <div className="modal-word-button-zone">
                    <CustomButton style={{width: "25%"}} txt={"SUBMIT"} onClick={buttonFunc}/>
                </div>

            </div>
        </div>
    );
};

export default AddWordModal;