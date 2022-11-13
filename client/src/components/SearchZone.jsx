import React from 'react';
import "../styles/search-zone.scss"

const SearchZone = ({searchTerm, setSearchTerm}) => {
    return (
        <div className="search-zone">
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