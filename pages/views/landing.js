import React from 'react';

import LandingHeader from '../components/landingHeader';
import LandingButtons from '../components/landingButtons';

const LandingView = ({ 
  validBtn, 
  toggleUi, 
  fetchSuccess, 
  locationInput, 
  toggleLocationInputView, 
  isVisible = true,
  isLoadingLocation
}) => {
  if (!isVisible) return

  return (
    <div className="landingView">
      {locationInput && (
        <div className="inputLocation__header">
          <i 
            onClick={() => toggleLocationInputView(false)}
            className="fas fa-chevron-left" 
          />
        </div>
      )}
      <LandingHeader
        fetchSuccess={fetchSuccess} 
        locationInput={locationInput}
        isLoadingLocation={isLoadingLocation}
      /> 
      <LandingButtons 
        validBtn={validBtn}
        toggleUi={toggleUi}
        locationInput={locationInput}
        toggleLocationInputView={toggleLocationInputView}
      />
    </div>
  )
}

export default LandingView;
