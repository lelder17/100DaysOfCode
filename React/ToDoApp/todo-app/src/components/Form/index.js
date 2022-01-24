import React, {useState} from "react";

function Form() {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('click')
    }

    const [addItem, setAddItem] = useState(true)
    const [isCompleted, setCompleted] = useState(false);



    return (
        <form>
      {/* add input field and submit button */}
        <div className='form-wrapper'>
          <fieldset>
          <label>
            <input name='item' placeholder='What do we need to accomplish today?'></input>
          </label>
          </fieldset>
          <button onClick={handleSubmit}>Add !</button>
        </div>
      </form>
    )
}

export default Form;