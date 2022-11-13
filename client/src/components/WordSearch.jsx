import React, {useState} from 'react';
import WordZone from "./WordZone";
import SearchZone from "./SearchZone";

const WordSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div style={{width:"100vw", height:"100vh"}}>
            <SearchZone searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <WordZone searchTerm={searchTerm}/>
        </div>
    );
};

export default WordSearch;