import React, {useEffect, useState} from 'react';
import Word from "./Word";
import {useSelector} from "react-redux";
import "../../styles/word-zone/word-zone.scss"
import SearchZone from "./SearchZone";
import {apiLink} from "../../assets/fakewords";
import AddWordModal from "./AddWordModal";
import axios from "axios";
import {useActions} from "../../hooks/useActions";
import CustomModal from "../CustomModal";
import {useNavigate} from "react-router-dom";
const WordZone = () => {
    const user = useSelector((state => state.user))
    const words = useSelector(state => state.words)
    const [activeModal, setActiveModal] = useState(false);
    const [currentWord, setCurrentWord] = useState({});
    const [searchTerm, setSearchTerm] = useState("");
    const [position, setPosition] = useState(-1);
    const {addWords,cleanWords,removeWord} = useActions();
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    // eslint-disable-next-line
    const filteredWords = words.filter((word) =>{
        if(searchTerm === "") return true
        else if(word.original.toLowerCase().includes(searchTerm.toLowerCase())) return true
    })
    function addNewWord(){
        setActiveModal(true)
        setCurrentWord({})
    }
    function changeWord(word,id){
        setCurrentWord(word)
        setActiveModal(true)
        setPosition(id)


    }

    function addWords1(data) {
        const reverse = data.reverse()
        addWords(reverse)
    }
    function fetchWords(){
        cleanWords()
        const api = apiLink+"/api/words"
        const token = user.token;
        axios.get(api,{headers: { Authorization: `Bearer ${token}` }})
            .then(res => {
                addWords1(res.data)})
            .catch(() => navigate("/login"))
    }

    useEffect(()=>{
        fetchWords()
        // eslint-disable-next-line
    },[])

    async function deleteWordModal(id) {
        removeWord(id)
        const api = apiLink+`/api/words/${id}`
        const token = user.token;
        await axios.delete(api,{headers: { Authorization: `Bearer ${token}` }})
            .catch(() => navigate("/login"))
        setShowModal(false)

    }

    function deleteWord(word) {
        setCurrentWord(word)
        setShowModal(true)
    }

    return (
        <div className="word-zone">
            <AddWordModal activeModal={activeModal} setActiveModal={setActiveModal} currentWord={currentWord} position={position} />
            <CustomModal
                show={showModal}
                setShow={setShowModal}
                isStatic={false}
                submitFunc={async ()=>deleteWordModal(currentWord.id)}
                bodyText={`Do you want to delete the word "${currentWord.original}"?`}
                secButtTxt={"Cancel"}
                primButtTxt={"Delete"}
            />
            <div className="word-zone1">
                <div className="add-word" onClick={() => addNewWord()}>
                    + NEW WORD
                </div>
                <SearchZone searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

                <div className="word-zone-inner">

                    {
                        filteredWords.length ?
                            filteredWords.map((word, id) =>
                                <Word
                                    original={word.original}
                                    key={id}
                                    transcription={word.transcription}
                                    translations={word.translations}
                                    changeFunc={()=> changeWord(word,id)}
                                    deleteFunc={()=> deleteWord(word)}
                                />)
                            :
                            words.length
                                ?
                                <div className="no-words">YOUR SEARCH DID NOT MATCH ANY WORD</div> : <div></div>

                    }
                </div>
            </div>
        </div>
    );
};

export default WordZone;