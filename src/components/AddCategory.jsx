import PropTypes from 'prop-types';
import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = (e) => {
        setInputValue( val => e.target.value);
    }

    const onSubmit = ( e ) => {
        e.preventDefault();

        if (inputValue.trim().length <= 1) return;
        onAddCategory(inputValue.trim());
        setInputValue( val => '');
    }

    return (
        <form aria-label="form" onSubmit={ (event) => onSubmit(event)}>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={ (event) => onInputChange(event) }
            />
            <button>Agregar</button>
        </form>
    );
}

AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired,
}