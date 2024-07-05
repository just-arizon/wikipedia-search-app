import React, { useState, useRef, useEffect } from 'react';

const SearchBar = ({onSearch}) => {

    const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef(null);
    


  useEffect(() => {
    inputRef.current.focus();
  }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm)
    }
  return (
    <form onSubmit={handleSubmit}>
        <input 
        type='search'
        name='searchTerm'
        id='searchTerm'
        placeholder='Enter a search term...'
        value={searchTerm}
        ref={inputRef}
        onChange={(event) => {
            setSearchTerm(event.target.value)
        }}
        />
      
    </form>
  );
}

export default SearchBar;
