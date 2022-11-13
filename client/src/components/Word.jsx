import React from 'react';
import "../styles/word.scss"
const Word = ({word,transcription,meanings}) => {
    const means = meanings.join(", ");
    return (
        <div className={"word"}>
            <div className="word-left">
                <div className="word-header">
                    <div className="word-header-txt">
                        {word}
                    </div>
                    <div className="word-transcription">
                        [{transcription}]
                    </div>
                </div>
                <div className="word-meanings">
                    {means}
                </div>
            </div>
            <div className="word-right">
                <div className="word-icon1">

                </div>
                <div className="word-icon2">

                </div>
            </div>




        </div>
    );
};

export default Word;