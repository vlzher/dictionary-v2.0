import React from 'react';
import Word from "./Word";
import {useSelector} from "react-redux";
import "../styles/word-zone.scss"
import SearchZone from "./SearchZone";
import {fakeWords} from "../assets/fakewords";
const WordZone = ({searchTerm}) => {

    const words = useSelector(state => state.words)
    // eslint-disable-next-line
    // const filteredWords = words.filter((word) =>{
    //     if(searchTerm === "") return word
    //     else if(word.word.toLowerCase().includes(searchTerm.toLowerCase())) return word
    // })
    const filteredWords = fakeWords;
    return (
        <div className="word-zone">
            <div className="word-zone1">
                <div className="add-word">
                    + NEW WORD
                </div>
                <SearchZone/>

                <div className="word-zone-inner">

                    {
                        filteredWords.length ?
                            filteredWords.map((word, id) =>
                                <Word
                                    word={word.word}
                                    key={id}
                                    transcription={word.transcription}
                                    meanings={word.meanings}/>)
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