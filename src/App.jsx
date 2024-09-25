import React from 'react'
import ListofItems from './Components/ListofItems';
import ToggleSwitch from './Components/toggleSwitch';


const App = () => {

  const items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];

  return (
    <div>
      <ListofItems items={items}/>
      <h1>ToggleSwitch</h1>
      <ToggleSwitch/>
    </div>
  )
}

export default App