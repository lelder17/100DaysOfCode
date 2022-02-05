import React, { useState } from 'react';

//pass any props to Form function
function Form({ setInput, inputValue, todos, setTodos }) {
  const newInputValue = (e) => {
    e.preventDefault();
    setInput(e.target.value); //setting new state to new input value
  };

  const handleSubmitButton = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: Math.random() * 1000,
        text: inputValue,
        completed: false,
      },
    ]);
    setInput(''); //set state back to empty string
  };
  return (
    <form>
      {/* add input field and submit button */}
      <div className='form-wrapper'>
        <input
          type='text'
          name='item'
          placeholder='What do we need to accomplish today?'
          value={inputValue}
          onChange={newInputValue}
        ></input>
        <button type='submit' onClick={handleSubmitButton}>
          Add Todo!
        </button>
      </div>
    </form>
  );
}

export default Form;
