import React from 'react';
import './style.css';
import { IState as Props } from '../App';


interface IProps {
  nameColor: Props['favouriteColor']
}

const InputField: React.FC<IProps> = ({nameColor}) => {

  const renderList = (): JSX.Element[] => {
    return nameColor.map((nameColor, index) => {
        return (
            <div key={index}>
                <div>
                  <span className="colorBox" style={{backgroundColor: nameColor.hexCode}}></span>
                  <span>{nameColor.name}</span>
                </div>
            </div>
        )
    })
}

return (
      <div className='renderList'>{renderList()}</div> 
)

}

export default InputField