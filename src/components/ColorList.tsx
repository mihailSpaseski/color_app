import React from 'react';
import './style.css';
import { IState as Props } from '../App';
import { sendData } from './SimulateRequest';

interface IProps {
  nameColor: Props['favouriteColor'],
  setNameColor: React.Dispatch<React.SetStateAction<Props["favouriteColor"]>>
}

const ColorList: React.FC<IProps> = ({nameColor, setNameColor}) => {

  const handleDelete = async (index: number) => {

    await sendData('DELETE',{}) 
    setNameColor(nameColor.filter((e,key) => key !== index))

  }
 
  const renderList = (): JSX.Element[] => {
    return nameColor.map((nameColor, index) => {
        return (
            <div key={index}>
                <div>
                  <span className='colorBox' style={{backgroundColor: nameColor.hexCode}}></span>
                  <span className='nameDisplay'>{nameColor.name}</span>
                  <span className='removeColor'>
                    <button onClick={() => handleDelete(index)} className='removeColorBtn'>
                      Remove color</button>
                    </span>
                </div>
            </div>
        )
    })
}
  return (
      <div className='renderList'>{renderList()}</div> 
  )
}

export default ColorList