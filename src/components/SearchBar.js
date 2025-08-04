import React, { useState } from 'react';
import '../style/searchbar.css';

export function SearchBar({ onSearch, placeholder = "Rechercher une recette ou un ingrédient..." }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    const clearSearch = () => {
        setSearchTerm('');
        onSearch('');
    };

    return (
        <div className="search-container">
            <div className="search-bar">
                <div className="search-icon">
                    <i className="fas fa-search"></i>
                </div>
                <input
                    type="text"
                    className="search-input"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={handleSearch}
                />
                {searchTerm && (
                    <button className="clear-button" onClick={clearSearch}>
                        <i className="fas fa-times"></i>
                    </button>
                )}
            </div>
        </div>
    );
}
