import React, {useEffect, useState} from 'react';
import '../../styles/word-zone/word-modal.scss'
import CustomInput1 from "./CustomInput1";
import {useActions} from "../../hooks/useActions";
import axios from "axios";
import {apiLink} from "../../assets/fakewords";
import {useSelector} from "react-redux";

const AddWordModal = ({activeModal,setActiveModal,currentWord,position}) => {
    const user = useSelector(state => state.user)
    const {addWord} = useActions();
    // eslint-disable-next-line no-unused-vars
    const [word,setWord] = useState({});
    const [original, setOriginal] = useState("");
    const [currentTranslation, setCurrentTranslation] = useState("")
    const [translationsToRemove, setTranslationsToRemove] = useState([])
    const [translations, setTranslations] = useState([])
    const [isFull, setIsFull] = useState(false)
    useEffect(() => {
        if(!(Object.keys(currentWord).length === 0)){
            setWord(currentWord)
            setOriginal(currentWord.original)
            setTranslations(currentWord.translations)
        }
    },[currentWord])

    function removeTranslation1(word,translation) {
        setTranslations(translations.filter((item) => item !== translation))
        setTranslationsToRemove([...translationsToRemove,translation])



    }
    function saveWord() {
        try{
            if(!translations){
                setTranslations([])
            }
            if(!(Object.keys(currentWord).length === 0)){
                axios.put(`${apiLink}/api/words/${currentWord.id}`,{

                        "id":currentWord.id,
                        "original": original,
                        "transcription":"",
                        "translations": translations
                    },{headers:{Authorization:`Bearer ${user.token}`}}
                ).then((res) => {addWord(res.data,position)})

            }
            else{
                axios.post(`${apiLink}/api/words/`,{
                        "original": original,
                        "transcription":"",
                        "translations": translations
                    },{headers:{Authorization:`Bearer ${user.token}`}}
                ).then((res) => {addWord(res.data,-1)})

            }

            setOriginal("")
            setCurrentTranslation("")
            setTranslations([])
            setWord({})
            setActiveModal(false)
        }
        catch(e){
            console.log(e)
        }



    }
    function addNewTranslation(){
        if(currentTranslation){
            setTranslations([].concat(translations).concat(currentTranslation))
            setCurrentTranslation("")
        }

    }

    function cleanClose() {
        setOriginal("")
        setCurrentTranslation("")
        setTranslations([])
        setWord({})
        setIsFull(false)
        setActiveModal(false)
    }
    const handleKeyDown = event => {
        if (event.keyCode === 9 || event.keyCode === 13) {
            if(translations.length >= 8){
                setIsFull(true)
                return
            }
            setIsFull(false)
            addNewTranslation()
        }
    };
    return (
        <div className={activeModal ? "word-modal active" : "word-modal"} onClick={()=>setActiveModal(false)}>
            <div className={activeModal ? "word-modal-content active" : "word-modal-content"} onClick={e => e.stopPropagation()}>
                <div className="close-menu">
                    <div className="close-menu-button" onClick={() => cleanClose()}>

                    </div>
                </div>
                <CustomInput1
                        value={original}
                        onChange={(e)=>setOriginal(e.target.value)}
                        placeholder={"Word"}
                        type="text"
                />
                <CustomInput1
                        value={currentTranslation}
                        onChange={(e)=>setCurrentTranslation(e.target.value)}
                        placeholder={"Translation"}
                        type="text"
                        onKeyDown={handleKeyDown}
                        isIcon={true}
                        iconFunc={addNewTranslation}
                />
                <div className="word-translations">
                    {translations ? translations.map((translation,key) =>
                        <div key={key} className={"word-translation"} data-hover="X" onClick={() => removeTranslation1(word,translation)}>
                            {translation}
                        </div>
                    ) : ""}
                </div>
                <div className="button-save-zone">
                    <button className="button-save" onClick={() => saveWord()}>
                        Save
                    </button>
                    {isFull ? <div className="full-translation">You can't add more than 8 translations</div> : ""}
                </div>



            </div>
        </div>
    );
};

export default AddWordModal;