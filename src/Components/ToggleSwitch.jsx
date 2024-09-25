import React, { useState } from 'react';
import './ToggleSwitch.css'; 

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false); 

  const handleToggle = () => {
    setIsOn((prevState) => !prevState); 
  };

  return (
    <div className="toggle-switch" onClick={handleToggle}>
      <div className={`switch ${isOn ? 'on' : 'off'}`}>
        <span className="circle"></span>
      </div>
      <p>{isOn ? 'ON' : 'OFF'}</p>
    </div>
  );
};

export default ToggleSwitch;
