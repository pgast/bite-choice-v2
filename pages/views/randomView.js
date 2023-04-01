import React, { useEffect, useState } from 'react';

import ResultView from './resultView';

const RandomView = ({ locationInput, toggleUi, data, dispatch, isVisible, coordinates }) => {
  if (!isVisible) return

  const [headerLocation, setHeaderLocation] = useState(!locationInput ? '' : locationInput)
  
  const fetchLocationPayload = !locationInput ? coordinates : locationInput

  useEffect(() => fetchRandomData(), []);

  const fetchRandomData = () => dispatch ({ type: 'FETCH_RANDOM_DATA', payload: fetchLocationPayload });

  return (
    <ResultView
      data={data} 
      randomSorting
      isCustom={false} 
      toggleUi={toggleUi}
      location={headerLocation} 
      hasLocationInput={locationInput}
    />
  );
};

export default RandomView;
