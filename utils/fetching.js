import request from 'request';

import { API_ROOT_URL } from "@/constants";

export const generateUrl = (inputParams) => {
  let url = API_ROOT_URL;
  console.log(inputParams)
  for (let key in inputParams) {
      let parameter = inputParams[key];
      switch (key) {
          case 'location':
              url += `location=${parameter}&`;
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
      // res.send(JSON.parse(body));
      res.status(200).json({ businesses: JSON.parse(body)});
    }
  }); 
};
