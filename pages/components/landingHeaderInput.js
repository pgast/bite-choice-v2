import React from 'react';

const landingHeaderInput = ({ updateLocation, inputLocation }) => (
  <div className="landingHeader__banner--inputLocation"> 
    <input
      type="text"
      placeholder="Type your new location" 
      onChange={(e) => updateLocation(e.target.value)}
      className="landingHeader__banner--inputLocation__textInput"
      value={inputLocation.charAt(0).toUpperCase() + inputLocation.substring(1)}
    />
    <h3>and choose your search option</h3>
  </div>
)

export default landingHeaderInput;
