import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import ColorList from './components/ColorList';

export interface IState {
  favouriteColor: {
    name: string
    hexCode: string
    id: number
  }[]
}

function App() {

  const [nameColor, setNameColor] = useState<IState["favouriteColor"]>([])

  return (
    <div className="App">

      <p className='titleOfPage'>My Favourite Colors</p>

      <InputField nameColor={nameColor} setNameColor={setNameColor}/>
      
      {nameColor.length === 0 ? <div>
        <div className='iconStyle'>
          <div className='iconInside'>

            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.16 5.00997L26.07 4.90497C24.6646 3.36791 22.9545 2.14037 21.0486 1.30054C19.1427 0.460706 17.0828 0.0269775 15 0.0269775C12.9173 0.0269775 10.8574 0.460706 8.95148 1.30054C7.04558 2.14037 5.33546 3.36791 3.93003 4.90497L3.84003 5.00997C2.21361 6.82096 1.05234 9.00054 0.456463 11.3606C-0.139412 13.7207 -0.151995 16.1903 0.419803 18.5563C0.9916 20.9223 2.1306 23.1136 3.73848 24.941C5.34636 26.7685 7.37482 28.1772 9.64877 29.0456C11.9227 29.914 14.3738 30.2159 16.7906 29.9254C19.2073 29.6348 21.517 28.7605 23.5203 27.3779C25.5236 25.9953 27.1604 24.1459 28.2893 21.9894C29.4182 19.8329 30.0053 17.4341 30 15C30.0019 11.3092 28.6335 7.74922 26.16 5.00997V5.00997ZM15 2.99997C17.0268 2.99464 19.0208 3.51122 20.79 4.49997H9.21003C10.9793 3.51122 12.9733 2.99464 15 2.99997V2.99997ZM5.64003 7.49997H24.36C25.742 9.228 26.6194 11.3045 26.895 13.5H3.10503C3.38069 11.3045 4.25801 9.228 5.64003 7.49997ZM15 27C12.0791 26.9973 9.2594 25.9294 7.06957 23.9964C4.87974 22.0634 3.47014 19.398 3.10503 16.5H26.895C26.5299 19.398 25.1203 22.0634 22.9305 23.9964C20.7407 25.9294 17.921 26.9973 15 27ZM9.00003 8.99997C8.70335 8.99997 8.41334 9.08794 8.16667 9.25276C7.92 9.41758 7.72774 9.65185 7.61421 9.92594C7.50067 10.2 7.47097 10.5016 7.52885 10.7926C7.58673 11.0836 7.72959 11.3508 7.93937 11.5606C8.14914 11.7704 8.41642 11.9133 8.70739 11.9711C8.99836 12.029 9.29996 11.9993 9.57405 11.8858C9.84814 11.7723 10.0824 11.58 10.2472 11.3333C10.4121 11.0866 10.5 10.7966 10.5 10.5C10.5 10.1021 10.342 9.72061 10.0607 9.43931C9.77938 9.158 9.39785 8.99997 9.00003 8.99997V8.99997ZM18 8.99997C17.7034 8.99997 17.4133 9.08794 17.1667 9.25276C16.92 9.41758 16.7277 9.65185 16.6142 9.92594C16.5007 10.2 16.471 10.5016 16.5288 10.7926C16.5867 11.0836 16.7296 11.3508 16.9394 11.5606C17.1491 11.7704 17.4164 11.9133 17.7074 11.9711C17.9984 12.029 18.3 11.9993 18.5741 11.8858C18.8481 11.7723 19.0824 11.58 19.2472 11.3333C19.4121 11.0866 19.5 10.7966 19.5 10.5C19.5 10.1021 19.342 9.72061 19.0607 9.43931C18.7794 9.158 18.3979 8.99997 18 8.99997ZM13.5 23.895C13.7242 24.022 13.9773 24.0892 14.235 24.09C14.5008 24.0895 14.7617 24.0184 14.991 23.884C15.2203 23.7496 15.4098 23.5567 15.54 23.325C15.9306 22.6176 16.5043 22.0284 17.2011 21.6193C17.8979 21.2102 18.692 20.9963 19.5 21C19.8979 21 20.2794 20.8419 20.5607 20.5606C20.842 20.2793 21 19.8978 21 19.5C21 19.1021 20.842 18.7206 20.5607 18.4393C20.2794 18.158 19.8979 18 19.5 18C18.163 17.9999 16.8502 18.3573 15.6977 19.0351C14.5452 19.7129 13.5948 20.6864 12.945 21.855C12.7495 22.1994 12.6981 22.6072 12.802 22.9894C12.906 23.3715 13.1569 23.6971 13.5 23.895V23.895Z" fill="#3C4043"/>
            </svg>

          </div>
        </div>
        
        <div className='noItemsTextBox'>

          <p className='noItemTitle'>Your collection is empty!</p>
          <p className='noItemSubtitle'>Please add your favourite colors to make us happy.</p> 
        
        </div>
        
      </div> : <div> <p className='collection'>Color collection</p> </div>} 
      
      <ColorList nameColor={nameColor} />

    </div>
  );
}

export default App;
