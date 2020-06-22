import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

    const data = [];

    const [categories, setCategories] = useState(data);
    
    const handleAdd = (text) => {
        setCategories(prevCategories => [text, ...prevCategories])
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <AddCategory setCategories= { handleAdd } />

            <ol>
                { 
                    categories.map( category => (
                        <GifGrid
                            key={ category }
                            category= { category }
                        />
                    ))
                }
            </ol>
        </>
    )
};
