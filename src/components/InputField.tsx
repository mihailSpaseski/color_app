import React from 'react';
import './style.css';

interface Props {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>

  handleAdd: (e: React.FormEvent) => void;
}


const InputField: React.FC<Props> = ({color, setColor, handleAdd}) => {
  return (
    <form className='input' onSubmit={handleAdd}>
        <input type="input" placeholder='Color name' className='input_box' />
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        <button type='submit' className='input_submit'>+</button>
    </form>
  )
}

export default InputField