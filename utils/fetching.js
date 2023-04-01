import request from 'request';

import { API_ROOT_URL } from "@/constants";

export const generateUrl = (inputParams) => {
  let url = API_ROOT_URL;
  for (let key in inputParams) {
      let parameter = inputParams[key];
      switch (key) {
          case 'location':
              url += `location=${parameter}&`;
              break;
          case 'latitude':
            url += `latitude=${parameter}&`
            break;
            case 'longitude':
            url += `longitude=${parameter}&`
            break;
          case 'term':
              if (parameter === null || parameter === undefined || parameter === 'null') {
                  url = url;
              } else {
                  url += `term=${parameter}&`;
              }
              break;
          case 'sort_by':
              if (parameter === "Best Match") {
                  parameter = "best_match";
              } else {
                  parameter = parameter.toLowerCase();
              }
              url += `sort_by=${parameter}&`;
              break;
          default:
              url = url;
      }
  };
  return url.slice(0, -1);
};

export const getRestaurantData = (inputParams, res) => {
  request.get({
    "headers": 
    {
      "Authorization": `Bearer ${process.env.NEXT_PUBLIC_YELP_API_KEY}`
    },
    "url": generateUrl(inputParams)
  }, (error, response, body) => 
  {
    if (error) { 
      console.error(error)
      res.send({ businesses: "error" }) 
    } else {
      res.status(200).json({ businesses: JSON.parse(body).businesses });
    }
  }); 
};

export const getLocationParameters = (location, parameters) => {
  const newParameters = { ...parameters }
  // Check if we are fetching by input location or coordinates
  const hasLatitude = /latitude/i.test(location)
  const hasLongitude = /longitude/i.test(location)
  const validCoords = hasLatitude && hasLongitude

  if (validCoords) {
    const coordinates = location.split(',')
    const latitude = coordinates[0].split('=')[1]
    const longitude = coordinates[1].split('=')[1]
    newParameters.latitude = latitude
    newParameters.longitude = longitude
  } else {
    newParameters.location = location
  }

  return newParameters
}
