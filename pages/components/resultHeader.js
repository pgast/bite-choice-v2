import React from 'react';

const ResultHeader = ({ 
  toggleUi, 
  location, 
  isCustom, 
  toggleCustomForm, 
  customSearchData, 
}) => {
  return (
    <div className={isCustom ? "resultHeader resultHeader--custom" : "resultHeader"}>
      {!isCustom && (
        <>
          <i 
            className="fas fa-chevron-left" 
            onClick={() => toggleUi()}
          />
          <div className="resultHeader__title">
            <h4>Eating in</h4>
            <h3>{location}</h3>
          </div>
        </>
      )}
      {isCustom && (
        <>
          <i 
            className="fas fa-chevron-left" 
            onClick={() => toggleCustomForm()}
          />
          <div className="resultHeader__title">
            <h4>Eating in</h4>
            <h3>{location}</h3>
          </div>
          <div className="resultHeader--custom__searchTerms">
            {customSearchData.searchTerms.map((el, index) => {
              return (
                <div 
                  key={index} 
                  className="resultHeader--custom__searchTerms__searchItem"
                >
                  <p>{el}</p>
                </div>
              )
            })} 
          </div>
          <div className="resultHeader--custom__sortDisplay">
            <p>Sorted by</p>
            <p>{customSearchData.sortBy}</p>
          </div> 
        </>
      )}
    </div>
  );
};

export default ResultHeader;
