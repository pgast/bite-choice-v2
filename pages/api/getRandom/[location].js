import { getRestaurantData } from '@/utils/fetching';

export default function handler(req, res) {
  const { location } = req.query
  const sortBy = ['best_match', 'rating', 'review_count'];
  let parameters = {};
  parameters.sort_by = sortBy[Math.floor(Math.random() * Math.floor(3))];
  parameters.location = location

  getRestaurantData(parameters, res)
}
