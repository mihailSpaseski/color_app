import React from 'react';
import './style.css';
import { IState as Props } from '../App';

interface IProps {
  nameColor: Props['favouriteColor']
}

const handleDelete = (id: number) => {
  console.log(id)
}

const ColorList: React.FC<IProps> = ({nameColor}) => {

  const renderList = (): JSX.Element[] => {
    return nameColor.map((nameColor, index) => {
        return (
            <div key={index}>
                <div>
                  <span className='colorBox' style={{backgroundColor: nameColor.hexCode}}></span>
                  <span className='nameDisplay'>{nameColor.name}</span>
                  <span className='removeColor'>
                    <button onClick={() => handleDelete(nameColor.id)} className='removeColorBtn'>
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