import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { color } from './model';


const App:React.FC = () => {

  // const [colorName, setColorName] = useState<string>("");

  const [color, setColor] = useState<string>("");
  const [colors, setColors] = useState<color[]>([]);
  

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (color){
      setColors([...colors, { id: Date.now(), name: color, hexcode: color}])
    }
  }

  // console.log(colors)

  return (
    <div className="App">
      <p>My Favourite Colors</p>

      <InputField color={color} setColor={setColor} handleAdd={handleAdd}/>
      
    </div>
  );
}

export default App;
