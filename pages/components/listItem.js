import React from 'react';

const ListItem = ({ 
  item = { name: null, categories: [], url: null }, 
  removeItem,
}) => {
  return (
    <div className="listItem">
      <div>
        <p>
          {item.name}
        </p>
        <p>
          { item.categories[0]?.title || "" }
        </p>
      </div>
      <div className="listItem__btnRow">
        <a
          className="listItem__btn"
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Info
        </a>
        <div 
          className="listItem__btn listItem__btn--delete"
          onClick={() => removeItem()}
        >
          Delete
        </div>
      </div>
    </div>
  );
};

export default React.memo(ListItem);
