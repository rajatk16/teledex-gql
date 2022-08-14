import { checkIfAdmin, handleError } from '../../../utils';
import { EpisodeModel } from '../../../models';

export const createEpisode = async (_: any, { data }: any, { req, getAuthUser, models }: any) => {
  try {
    await checkIfAdmin(req, getAuthUser, models);

    const episode = await (models.Episode as EpisodeModel).create({
      ...data,
    });

    return episode;
  } catch (error) {
    handleError(error);
  }
};

export const updateEpisode = async (_: any, args: any, { req, getAuthUser, models }: any) => {
  try {
    await checkIfAdmin(req, getAuthUser, models);

    const episode = await (models.Episode as EpisodeModel).findByIdAndUpdate(
      args.episodeId,
      {
        ...args.data,
      },
      {
        new: true,
      }
    );

    return episode;
  } catch (error) {
    handleError(error);
  }
};
