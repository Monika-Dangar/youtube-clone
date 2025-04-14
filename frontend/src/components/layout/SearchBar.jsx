import React, { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdMic } from "react-icons/io";

const SearchBar = ({ onSearch }) => {
    const [searchFocused, setSearchFocused] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(searchQuery);
        }
    };

    return (
        <div className={`flex-grow max-w-xl mx-6 ${searchFocused ? 'flex-grow-2' : ''}`}>
            <form className="flex" onSubmit={handleSearch}>
                <div className={`relative flex flex-grow border ${searchFocused ? 'border-blue-500 shadow-sm' : 'border-gray-300'} rounded-l-full`}>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setSearchFocused(true)}
                        onBlur={() => setSearchFocused(false)}
                        className="w-full py-2 px-4 rounded-l-full focus:outline-none"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-gray-100 border border-l-0 border-gray-300 rounded-r-full px-5 flex items-center justify-center hover:bg-gray-200"
                >
                    <AiOutlineSearch size={20} />
                </button>
                <button
                    type="button"
                    className="ml-2 bg-gray-100 h-10 w-10 rounded-full flex items-center justify-center hover:bg-gray-200"
                    aria-label="Search with voice"
                >
                    <IoMdMic size={20} />
                </button>
            </form>
        </div>
    );
};

export default SearchBar