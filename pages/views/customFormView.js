import React, { useState, useContext } from 'react';

import { Store } from '../../store';

const CustomFormView = ({ toggleUi, customView, location, coordinates, isVisible }) => {
  if (!isVisible) return 
  
  const { dispatch } = useContext(Store);
  const [currentTerm, setCurrentTerm] = useState("");
  const [sortBy, setSortBy] = useState(customView.sortBy);
  const [searchTerms, setSearchTerms] = useState(customView.searchTerms);

  const submitSearchTerms = (e) => {
    e.preventDefault();
    const fetchLocationPayload = !location ? coordinates : location
    let payload = { sortBy, searchTerms, location: fetchLocationPayload };
    return dispatch ({ type: 'SUBMIT_SEARCH', payload });
  };

  const addTerm = () => {
    if (currentTerm !== '' && searchTerms.length < 3) {
      let newTerms = [...searchTerms];
      newTerms.push(currentTerm);
      setSearchTerms(newTerms);
      setCurrentTerm('');
    }
  };

  const removeTerm = (inputIndex) => {
    const newSearchTerms = [...searchTerms].filter((el, inx) => inx !== inputIndex);
    setSearchTerms(newSearchTerms);
  };

  return (
    <div className="customForm">
      <div className="customForm__header">
        <i 
          className="fas fa-chevron-left" 
          onClick={() => toggleUi('landing')}
        />
        <h3>Custom Search</h3>
      </div>
      <div className="customForm__form">
        <form className="customForm__form__select">
          <label>Sort by</label>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="best_match">Best Match</option>
            <option value="rating">Rating</option>
            <option value="random">Random</option>
          </select>
        </form>
        <div className="customForm__form__txtInput">
          <form>
            <label>Search for:</label>
            <input 
              type="text"
              size="small"
              value={currentTerm}
              placeholder="e.g. Pizza, Tacos, Bar" 
              onChange={(e) => setCurrentTerm(e.target.value)}
            />
          </form>
          <div
            onClick={(e) => addTerm(e)} 
            disabled={searchTerms.length === 3 ? true : false}
            className={searchTerms.length === 3 ? "customForm__form__txtInput__addItemBtn customForm__form__txtInput__addItemBtn--delete" : "customForm__form__txtInput__addItemBtn"} 
          >
            Add
          </div>
        </div> 
        <div className="customForm__form__searchItems">
          {searchTerms.map((el, index) => {
            return (
              <div 
                key={index}
                className="customForm__form__searchItems__item" 
                onClick={() => removeTerm(index)} 
              >
                <p>{el}</p>
                <i className="fas fa-times" />
              </div>
            )
          })}
        </div>  
      </div>
      <div
        className="customForm__findBtn"
        onClick={(e) => submitSearchTerms(e)}
      >
        <p>
          FIND ME PLACES
        </p>
      </div>
    </div>
  );
};

export default CustomFormView;
