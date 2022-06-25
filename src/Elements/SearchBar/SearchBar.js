import React from "react";
// import { useEffect, useState } from "react";
import './SearchBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = ({ searchQuery, setSearchQuery }) => (
    <div className="SearchBar">
        <form action="/" method="get">
            <input
                value={searchQuery}
                onInput={e => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                placeholder="Search"
                name="s"
                />
            <button type="submit">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </button>
        </form>
    </div>
);

export default SearchBar;