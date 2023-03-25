const request = require('request');

const generateUrl = (inputParams) => {
  let url = `https://api.yelp.com/v3/businesses/search?`;
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

export default function handler(req, res) {
  const { location } = req.query
  const sortBy = ['best_match', 'rating', 'review_count'];
  let parameters = {};
  parameters.sort_by = sortBy[Math.floor(Math.random() * Math.floor(4))];
  parameters.location = location

  request.get({
    "headers": 
    {
      "Authorization": `Bearer ${process.env.NEXT_PUBLIC_YELP_API_KEY}`
    },
    "url": generateUrl(parameters)
  }, (error, response, body) => 
  {
    if (error) { 
      console.log(error)
      res.send({ businesses: "error" }) 
    } else {
      // res.send(JSON.parse(body));
      res.status(200).json({ businesses: JSON.parse(body)});
    }
  }); 
}
