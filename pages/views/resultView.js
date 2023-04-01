import React from 'react';
import ResultList from '../components/resultList';
import ResultHeader from '../components/resultHeader'

const ResultView = ({ 
  data, 
  toggleUi, 
  isCustom, 
  location, 
  randomSorting, 
  customSearchData, 
  toggleCustomForm,
  isVisible = true,
}) => {
  if (!isVisible) return
  return (
    <div className="resultView">
      <ResultHeader 
        toggleUi={toggleUi} 
        isCustom={isCustom} 
        location={location} 
        customSearchData={customSearchData}
        toggleCustomForm={toggleCustomForm}
      />
      <ResultList 
        data={data} 
        toggleUi={toggleUi} 
        isCustom={isCustom} 
        randomSorting={randomSorting}
        customSearchTerms={customSearchData}
      />
      <div className="resultView__watermark">
        <a href="http://www.github.com/pgast">
          &lt;/&gt; pgast
        </a>
      </div>
    </div>
  );
};

export default ResultView;
