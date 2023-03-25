import request from 'request';

import { LOCATION_API_URL } from '@/constants';

export default function handler(req, res) {
  request.get({ "url": LOCATION_API_URL }, 
    (error, response, body) => 
    {
      if (error) { 
        console.error(error)
        res.send({ businesses: "error" }) 
      } else {
        res.status(200).send({ location: JSON.parse(body).city })
      }
    }); 
}
