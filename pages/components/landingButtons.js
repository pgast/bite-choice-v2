import React from 'react';

const LandingButtons = ({
  validBtn, 
  toggleUi, 
  locationInput, 
  toggleLocationInputView,
}) => {
  return (
    <div className="landingButtons">
      <div
        id={locationInput ? "btn--locationInput" : null}
        onClick={validBtn ? () => toggleUi('random') : null}
        className={validBtn ? "landingBtns__btn--findPlaces" : "landingBtns__btn--findPlaces landingBtns__btn--findPlaces--invalid"}
      >
        FIND ME PLACES
      </div>
      <div
        id={locationInput ? "btn--locationInput" : null}
        onClick={validBtn ? () => toggleUi('custom') : null}
        className={validBtn ? "landingBtns__btn--custom" : "landingBtns__btn--custom landingBtns__btn--custom--invalid"}
      >
        CUSTOM SEARCH
      </div>
      {!locationInput && (
        <div 
          className="landingButtons__btn--fixLocation"
          onClick={() => toggleLocationInputView(true)}
        >
          WRONG LOCATION? FIX IT HERE
        </div>
      )}
    </div>
  )
}

export default LandingButtons;
