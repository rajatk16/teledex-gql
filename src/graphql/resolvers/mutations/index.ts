import { createShow, updateShow } from './shows';
import { createEpisode, updateEpisode } from './episode';
import { createUser, loginUser, updateUser } from './user';

export const Mutation = {
  createShow,
  updateShow,
  createUser,
  updateUser,
  loginUser,
  createEpisode,
  updateEpisode,
};
