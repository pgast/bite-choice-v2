import React from 'react';

const ErrorScreen = ({ error }) => {
  return (
    <div className="errorScreen">
      <i className="fas fa-exclamation-triangle"/>
      <h1>Oops..</h1>
      <p>
        {error === "Error" ?
        "There was an error fetching the information. This might be due to:"
        :
        "Unable to fetch data due to problems with the server. Please try again later."
        }
      </p>
      {error === "Error" && (
        <ul>
          <li>Typos in your search terms</li>
          <li>Your internet connection</li>
          <li>No businesses available</li>
          <li>Wrong location input</li>
        </ul>
      )}
    </div>
  );
};

export default ErrorScreen;
