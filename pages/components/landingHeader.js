import React, { useContext } from 'react';

import LandingHeaderInput from './landingHeaderInput';
import { Store } from '../../store';

const LandingHeader = ({ fetchSuccess, locationInput, isLoadingLocation }) => {
  const { state, dispatch } = useContext(Store);
  const updateLocation = (payload) => dispatch ({ type: 'UPDATE_LOCATION', payload });

  return (
    <div className="landingHeader" id={locationInput ? "landingHeader--big" : null}>
      {(isLoadingLocation && !locationInput) && (
      <div className="landingHeader__banner--city">
        <i className="fas fa-spinner fa-spin"/>
        <h3>Fetching your location, please allow geolocation from the browser</h3>
      </div>
      )}
      {locationInput && (
        <LandingHeaderInput updateLocation={updateLocation} inputLocation={state.inputLocation} />
      )}
      {(fetchSuccess && !locationInput) && (
        <div className="landingHeader__banner--city">
          <h1>Where to eat today?</h1>
          <h1>Let's discover</h1>
        </div>
      )}
      {(!fetchSuccess && !locationInput && !isLoadingLocation) && (
        <div className="landingHeader__banner--error">
            <i class="fas fa-map-marked-alt" />
            <h1>Unable to fetch your location</h1>
            <h3>Allow location access in your browser or enter your location</h3>
        </div>
      )}
    </div>
  )
}

export default LandingHeader;
