import React, { useState } from 'react'
import { IState as Props } from "../App"
import './style.css';
interface IProps {
    nameColor: Props['favouriteColor']
    setNameColor: React.Dispatch<React.SetStateAction<Props["favouriteColor"]>>
}

const AddToList: React.FC<IProps> = ({nameColor, setNameColor}) => {

    const [input, setInput] = useState({
        name: '',
        hexCode: '#000000'
    }) 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (e: any) => {
        e.preventDefault();
        if (!input.name ) return ( console.log('Enter your color name!!') )

        setNameColor([
            ...nameColor,
            {
                name: input.name,
                hexCode: input.hexCode
            }
        ]);

        setInput({
            name: '',
            hexCode: input.hexCode
        })
    }


  return (
    <form className='input'>
        <input 
                className='input-box'
                type="text"
                onChange={handleChange}
                name="name"
                value={input.name}
                placeholder="Color Name"
            />

        <input 
                className='pickerStyle'
                type="color"
                onChange={handleChange}
                name="hexCode"
            />

            <button onClick={handleClick} className="AddToList-btn">
                +
            </button>
    </form>
  )
}

export default AddToList