import React, { useContext, useState } from 'react';

import LandingView from './landing';
import CustomView from './customView';
import RandomView from './randomView';

import { Store } from '../../store';


const MainView = ({ fetchSuccess, coordinates, isLoadingLocation }) => {
  const { state, dispatch } = useContext(Store);
  const [hasLocationInput, setHasLocationInput] = useState(false);
  const validUserLocation = state.inputLocation !== '' ? true : false;

  const clearLocation = () => dispatch ({ type: 'CLEAR_LOCATION' });
  const toggleUi = ui => dispatch ({ type: 'TOGGLE_UI', payload: ui });
  const toggleCustomForm = () => dispatch({ type: 'TOGGLE_CUSTOM_FORM' });

  const toggleLocationInputView = input => {
    clearLocation();
    setHasLocationInput(input);
  }

  const validBtn = () => {
    let eventA = hasLocationInput && validUserLocation ? true : false;
    let eventB = !hasLocationInput && fetchSuccess ? true : false;
    if(eventA || eventB) return true;
    return false;
  }

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <LandingView 
        validBtn={validBtn}
        toggleUi={toggleUi}
        fetchSuccess={fetchSuccess} 
        locationInput={hasLocationInput}
        isVisible={state.ui === 'landing'}
        isLoadingLocation={isLoadingLocation}
        toggleLocationInputView={toggleLocationInputView}
      />
      <CustomView
        data={state.data}
        toggleUi={toggleUi}
        coordinates={coordinates}
        customView={state.customView}
        isVisible={state.ui === 'custom'}
        toggleCustomForm={toggleCustomForm}
        locationInput={hasLocationInput && state.inputLocation}
        />
      <RandomView
        data={state.data}
        dispatch={dispatch}
        coordinates={coordinates}
        isVisible={state.ui === 'random'}
        toggleUi={() => toggleUi('landing')} 
        locationInput={hasLocationInput && state.inputLocation}
      />
    </div>
  );
};

export default MainView;
