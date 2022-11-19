import React from 'react';
import "../../styles/word-zone/word.scss"
const Word = ({original,transcription,translations, changeFunc, deleteFunc}) => {


    const trans = translations.join(", ");
    return (
        <div className={"word"}>
            <div className="word-left">
                <div className="word-header">
                    <div className="word-header-txt">
                        {original}
                    </div>
                    <div className="word-transcription">
                        {transcription}
                    </div>
                </div>
                <div className="word-meanings">
                    {trans}
                </div>
            </div>
            <div className="word-right">
                <div className="word-icon1" onClick={() => changeFunc()}>

                </div>
                <div className="word-icon2" onClick={() => deleteFunc()}>

                </div>
            </div>




        </div>
    );
};

export default Word;