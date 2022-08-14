import { getAllEpisodes, getEpisodeById } from './episode';
import { getAllUsers, logoutUser, getMe } from './user';
import { getAllShows, getShowById, searchShow, getShowByAirDay } from './shows';

export const Query = {
  getAllShows,
  getShowById,
  getShowByAirDay,
  searchShow,
  getAllUsers,
  getMe,
  logoutUser,
  getAllEpisodes,
  getEpisodeById,
};
