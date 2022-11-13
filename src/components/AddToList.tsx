import React, { useState } from 'react'
import { IState as Props } from "../App"


interface IProps {
    nameColor: Props['favouriteColor']
    setNameColor: React.Dispatch<React.SetStateAction<Props["favouriteColor"]>>
}

const AddToList: React.FC<IProps> = ({nameColor, setNameColor}) => {

    const [input, setInput] = useState({
        name: '',
        hexCode: ''
    }) 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        if (!input.name || !input.hexCode) return

        setNameColor([
            ...nameColor,
            {
                name: input.name,
                hexCode: input.hexCode
            }
        ]);

        setInput({
            name: '',
            hexCode: ''
        })
    }


  return (
    <div className='AddToList-style'>
        <input 
                type="text"
                onChange={handleChange}
                name="name"
                value={input.name}
                placeholder="Color Name"
            />

        <input 
                type="color"
                onChange={handleChange}
                name="hexCode"
            />

            <button onClick={handleClick} className="AddToList-btn">
                Add to List
            </button>
    </div>
  )
}

export default AddToList