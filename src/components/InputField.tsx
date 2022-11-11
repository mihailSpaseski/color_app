import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import './style.css';
import { AiOutlinePlus, AiOutlineHeart } from 'react-icons/ai';


const InputField = () => {

    const [hidden, setHidden] = useState(false);


  return (
    <form className='input'>
        <span className="icon"> <AiOutlineHeart/> </span>
        <input type="input" placeholder='Name for your color' className='input_box'/>
        
        <SketchPicker/>
        <button onClick={() => setHidden(!hidden)}>Show/Hide</button>
        
        
        <button type='submit' className='input_submit'>
            <span className="icon">
                <AiOutlinePlus/>
            </span>
        </button>
    </form>
  )
}

export default InputField