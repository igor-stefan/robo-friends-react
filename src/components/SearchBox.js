import React from 'react';

const SearchBox = ({searchChange}) => {
    return(
        <div className='pa2 mb2 '>
            <input 
            className='pa2 ba bw1 b--yellow bg-light-yellow i garamond'
            type='search' 
            placeholder='search robots'
            onChange = {searchChange}
            />
        </div>
    )
}

export default SearchBox;