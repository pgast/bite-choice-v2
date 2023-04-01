import React, { useReducer, createContext } from "react";

const initialState = {
  customView: {
    resultsMode: false,
    searchTerms: [],
    sortBy: 'best_match'
  },
  data: [],
  ui: 'landing',
  inputLocation: ''
}

const randomSorting = () => {
  const criteria = ['best_match', 'rating', 'review_count'];
  return criteria[Math.floor(Math.random() * 3)];
};

const searchTerm = async (term, sort_by, newLocation) => {
    const response = await fetch(`api/search/${term}/${sort_by}/${newLocation}`);
    const businesses = await response.json();
    return businesses.businesses;
  };

const fetchData = async (searchInputs) => {
  const { sortBy, searchTerms, location } = searchInputs;
  const isCoordinates = typeof location === 'object' && location !== null
  const fetchLocation = isCoordinates ? `latitude=${location.lat},longitude=${location.long}` : location
  const sorting = sortBy.toLowerCase() === 'random' ? randomSorting() : sortBy

  if (searchTerms.length === 0) {
    const data = await searchTerm(null, sorting, fetchLocation);
    return data;
  } else { 
    const termOne = searchTerms[0] !== undefined ? searchTerms[0] : null; 
    const termTwo = searchTerms[1] !== undefined ? searchTerms[1] : null; 
    const termThree = searchTerms[2] !== undefined ? searchTerms[2] : null; 

    let result = [];
    let dataOne = [];
    let dataTwo = [];
    let dataThree = [];

    if (termOne !== null) { dataOne = await searchTerm(termOne, sorting, fetchLocation) };
    if (termTwo !== null) { dataTwo = await searchTerm(termTwo, sorting, fetchLocation) };
    if (termThree !== null) { dataThree = await searchTerm(termThree, sorting, fetchLocation) };

    // ERROR CATCHER WRONG DATA
    if(dataOne === undefined) return [undefined];

    if (dataOne.length !== 0) { result.push(dataOne) };
    if (dataTwo.length !== 0) { result.push(dataTwo) };
    if (dataThree.length !== 0) { result.push(dataThree) };

    return result;
  }
};

const fetchRandomData = async (location) => {
  const isCoordinates = typeof location === 'object' && location !== null
  const fetchLocation = isCoordinates ? `latitude=${location.lat},longitude=${location.long}` : location

  const response = await fetch(`api/getRandom/${fetchLocation}`);
  // INTERNAL SERVER ERROR CATCHER
  if(response.status === 500) return 500;
  const businesses = await response.json();
  return businesses.businesses;
};

function reducer (state, action) {
  let customViewCopy = { ...state.customView };
  switch(action.type) {
    case 'TOGGLE_CUSTOM_FORM':
      customViewCopy.resultsMode = !customViewCopy.resultsMode;
      return { ...state, customView: customViewCopy };
    case 'SUBMIT_SEARCH':
      customViewCopy = {
        searchTerms: action.payload.searchTerms,
        sortBy: action.payload.sortBy,
        resultsMode: true
      };
      return { 
        ...state, 
        customView: customViewCopy, 
        data: fetchData(action.payload)
      };
    case 'FETCH_RANDOM_DATA':
      return { 
        ...state, 
        data: fetchRandomData(action.payload)
      } 
    case 'TOGGLE_UI':
      customViewCopy = {
        sortBy: 'Best Match',
        resultsMode: false,
        searchTerms: []
      };
      return { ...state, customView: customViewCopy, data: [], ui: action.payload };
    case 'UPDATE_LOCATION':
      return { ...state, inputLocation: action.payload };
    case 'CLEAR_LOCATION':
      return { ...state, inputLocation: '' }; 
    default:
      return state;
  }
};

export function StoreProvider (props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = {state, dispatch}
  return <Store.Provider value={value}>{props.children}</Store.Provider>
}

export const Store = createContext();
