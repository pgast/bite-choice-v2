import React from 'react';

const ChoiceView = ({ 
  item = { name: null, categories: [], location: { address1: null }, url: null }, 
  toggleUi,
}) => {
  return (
    <div className="choiceView">
      <h3>
        Your last option is
      </h3>
      <div className="choiceView__placeInfo">
        <h2>
          {item.name}
        </h2>
        <div className="choiceView__placeInfo__address">
          <p>
            {item.categories[0]?.title}
          </p>
          <p>
            {item.location.address1}
          </p>
        </div>
        <a  
          target="_blank"
          href={item.url}
          rel="noopener noreferrer"
          className="choiceView__btn"
        >
          Info
        </a>
      </div>
      <div 
        onClick={() => toggleUi('landing')}
        className="choiceView__btn choiceView__btn--tryAgain"
      >
        Try again
      </div>
    </div>
  )
}

export default ChoiceView;
