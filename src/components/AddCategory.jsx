import { useState } from "react";

export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setinputValue] = useState('');
    const onInputChange = ({target}) => {
        // console.log(target.value);
        setinputValue(target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(inputValue);
        const newInputValue = inputValue.trim();
        if(newInputValue.length<=1)return;

        onAddCategory(newInputValue);

        setinputValue('');
    }

  return (
    <>
    <form onSubmit={onSubmit}>
        <input 
            type="text" 
            placeholder="Buscar gifs" 
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
    
    </>
  )
}
