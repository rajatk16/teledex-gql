import { EpisodeModel } from '../../../models';

export const getAllEpisodes = async (_: any, __: any, { models }: any) => await (models.Episode as EpisodeModel).find();

export const getEpisodeById = async (_: any, args: any, { models }: any) =>
  await (models.Episode as EpisodeModel).findById(args.id);
