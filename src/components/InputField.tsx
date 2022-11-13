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
            <li key={index}>
                <div>
                   <button></button>
                    <h2>{nameColor.name}</h2>
                    <h2>{nameColor.hexCode}</h2>
                </div>
            </li>
        )
    })
}

return (
  <ul>
      {renderList()} 
  </ul>
)

}

export default InputField