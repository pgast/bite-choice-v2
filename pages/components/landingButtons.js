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
        <p>FIND ME PLACES</p>
      </div>
      <div
        id={locationInput ? "btn--locationInput" : null}
        onClick={validBtn ? () => toggleUi('custom') : null}
        className={validBtn ? "landingBtns__btn--custom" : "landingBtns__btn--custom landingBtns__btn--custom--invalid"}
      >
        <p>CUSTOM SEARCH</p>
      </div>
      {!locationInput && (
        <div 
          className="landingButtons__btn--fixLocation"
          onClick={() => toggleLocationInputView(true)}
        >
          <p>
            WANNA EXPLORE A DIFFERENT CITY?
          </p>
        </div>
      )}
    </div>
  )
}

export default LandingButtons;
