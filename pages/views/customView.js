import React from 'react';

import ResultView from './resultView';
import CustomFormView from './customFormView';

const CustomView = ({ 
  data,
  toggleUi, 
  isVisible,
  customView, 
  coordinates,
  locationInput,
  toggleCustomForm,
}) => {
  if (!isVisible) return
  return (
    <>
      <ResultView 
        isCustom
        data={data}
        toggleUi={toggleUi}
        location={locationInput}
        customSearchData={customView}
        isVisible={customView.resultsMode}
        toggleCustomForm={toggleCustomForm}
        randomSorting={customView.sortBy === 'random' ? true : false}
      /> 
      <CustomFormView
        toggleUi={toggleUi} 
        customView={customView} 
        location={locationInput}
        coordinates={coordinates}
        isVisible={!customView.resultsMode}
      />
    </>
  );
};

export default CustomView;
