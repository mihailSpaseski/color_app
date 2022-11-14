import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import AddToList from './components/AddToList';
import { FaRegSadTear } from 'react-icons/fa'

export interface IState {
  favouriteColor: {
    name: string
    hexCode: string
  }[]
}

function App() {

  const [nameColor, setNameColor] = useState<IState["favouriteColor"]>([])

  return (
    <div className="App">

      <p>My Favourite Colors</p>

      <AddToList nameColor={nameColor} setNameColor={setNameColor}/>
      
      {nameColor.length === 0 ? <div>
        <div className='iconStyle'>
          <div className='iconInside'>
            <FaRegSadTear size={30} />
          </div>
        </div>

        <p className='noItemTitle'>Your collection is empty.</p> 
        <p className='noItemSubtitle'>Please add your favourite colors to make us happy.</p> 
      </div> : null} 
      
      <InputField nameColor={nameColor} />

    </div>
  );
}

export default App;
