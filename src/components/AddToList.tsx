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
                placeholder={`${<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.16 2.61006C18.0983 1.54806 16.6908 0.902384 15.1933 0.790439C13.6958 0.678494 12.2078 1.10772 11 2.00006C9.72769 1.0537 8.14402 0.624569 6.56795 0.799095C4.99188 0.973621 3.54047 1.73884 2.506 2.94064C1.47154 4.14245 0.930854 5.69158 0.992833 7.27607C1.05481 8.86057 1.71485 10.3627 2.84003 11.4801L10.29 18.9301C10.383 19.0238 10.4936 19.0982 10.6155 19.1489C10.7373 19.1997 10.868 19.2259 11 19.2259C11.132 19.2259 11.2627 19.1997 11.3846 19.1489C11.5065 19.0982 11.6171 19.0238 11.71 18.9301L19.16 11.4801C19.7427 10.8978 20.2049 10.2064 20.5202 9.44542C20.8356 8.68445 20.9979 7.86879 20.9979 7.04506C20.9979 6.22133 20.8356 5.40567 20.5202 4.64469C20.2049 3.88371 19.7427 3.19233 19.16 2.61006V2.61006ZM17.75 10.0701L11 16.8101L4.25003 10.0701C3.65521 9.47276 3.25001 8.71311 3.08526 7.8864C2.92052 7.05969 3.00356 6.20274 3.32398 5.42305C3.6444 4.64336 4.18793 3.97565 4.88638 3.50368C5.58483 3.03171 6.40709 2.7765 7.25003 2.77006C8.37614 2.77282 9.45513 3.22239 10.25 4.02006C10.343 4.11379 10.4536 4.18818 10.5755 4.23895C10.6973 4.28972 10.828 4.31586 10.96 4.31586C11.092 4.31586 11.2227 4.28972 11.3446 4.23895C11.4665 4.18818 11.5771 4.11379 11.67 4.02006C12.4884 3.31094 13.5455 2.9392 14.6276 2.98008C15.7096 3.02096 16.7357 3.47141 17.4982 4.24025C18.2607 5.00909 18.7026 6.0389 18.7345 7.12125C18.7664 8.2036 18.3859 9.25765 17.67 10.0701H17.75Z" fill="#D8D9D9"/>
                    </svg>
                    } Color Name` }
            />
        <div className='pickerDiv'>
        <input 
                className='pickerStyle'
                type="color"
                onChange={handleChange}
                name="hexCode"
            />
        </div>
        

            <button onClick={handleClick} className="AddToList-btn">
                +
            </button>
    </form>
  )
}

export default AddToList