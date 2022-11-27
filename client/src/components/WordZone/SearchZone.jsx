import React from 'react';
import "../../styles/word-zone/search-zone.scss"
import {FaSearch} from "react-icons/fa";

const SearchZone = ({searchTerm, setSearchTerm}) => {
    return (
        <div className="search-zone">
            <FaSearch className={'search-icon'}/>
            <input className="search"
                   value ={searchTerm}
                   type={"text"}
                   placeholder={"Search"}
                   onChange={e => setSearchTerm(e.target.value)}
            />
        </div>

    );
};

export default SearchZone;
