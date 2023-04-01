import { getRestaurantData, getLocationParameters } from '@/utils/fetching';

export default function handler(req, res) {
  const { params } = req.query;
  const term = params[0]
  const sort_by = params[1]
  const location = params[2]
  let parameters = { sort_by, term }
  parameters = getLocationParameters(location, parameters)
  
  getRestaurantData(parameters, res);
}
