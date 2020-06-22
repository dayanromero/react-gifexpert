import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('');

    const hadleInput = (e) => {
        setinputValue(e.target.value); 
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(inputValue);
            setinputValue('')
        } 
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type='text'
                value={ inputValue }
                onChange={ hadleInput }
                placeholder= 'Search...'
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

