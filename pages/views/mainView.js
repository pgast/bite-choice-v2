import React, { useContext, useState } from 'react';

import LandingView from './landing'

import { Store } from '../store';
// const CustomView = React.lazy(() => import('../CustomView'));
// const RandomView = React.lazy(() => import('../RandomView'));


const MainView = ({ fetchSuccess, coordinates, isLoadingLocation }) => {
  const { state, dispatch } = useContext(Store);
  const [locationInput, setLocationInput] = useState(false);
  const validUserLocation = state.inputLocation !== '' ? true : false;

  const clearLocation = () => dispatch ({ type: 'CLEAR_LOCATION' });
  const toggleUi = ui => dispatch ({ type: 'TOGGLE_UI', payload: ui });
  const toggleCustomForm = () => dispatch({ type: 'TOGGLE_CUSTOM_FORM' });

  const toggleLocationInputView = input => {
    clearLocation();
    setLocationInput(input);
  }

  const validBtn = () => {
    let eventA = locationInput && validUserLocation ? true : false;
    let eventB = !locationInput && fetchSuccess ? true : false;
    if(eventA || eventB) return true;
    return false;
  }

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <LandingView 
        isVisible={state.ui === 'landing'}
        validBtn={validBtn}
        toggleUi={toggleUi}
        fetchSuccess={fetchSuccess} 
        locationInput={locationInput}
        isLoadingLocation={isLoadingLocation}
        toggleLocationInputView={toggleLocationInputView}
      />
      <React.Suspense fallback={<></>}>
        {state.ui === 'custom' && (
          <div>custom view</div>
          // <CustomView 
          //     data={state.data}
          //     toggleUi={toggleUi}
          //     customView={state.customView}
          //     toggleCustomForm={toggleCustomForm}
          //     location={locationInput ? state.inputLocation : location}
          //   />
        )} 
        {state.ui === 'random' && (
          <div>random view</div>
          // <RandomView
          //   data={state.data}
          //   locationInput={locationInput}
          //   toggleUi={() => toggleUi('landing')} 
          //   location={locationInput ? state.inputLocation : location}
          // />
        )}
      </React.Suspense>
    </div>
  );
};

export default MainView;
