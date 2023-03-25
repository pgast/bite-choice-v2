import { getRestaurantData } from '@/utils/fetching';

export default function handler(req, res) {
  const { params } = req.query;

  const location = params[0]
  const sort_by = params[1]
  const term = params[2]
  let parameters = { location, sort_by, term }

  getRestaurantData(parameters, res);
}
