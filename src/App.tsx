import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import AddToList from './components/AddToList';

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


      <InputField nameColor={nameColor} />

    </div>
  );
}

export default App;
