import { Query } from './queries';
import { Mutation } from './mutations';
import { EpisodeModel, ShowModel } from 'models';

export const resolvers = {
  Query,
  Mutation,
  Episode: {
    show: async (parent: any, _: any, { models }: any) => {
      const parentShow = await (models.Show as ShowModel).findById(parent.show);
      return parentShow;
    },
  },
  Show: {
    episodes: async (parent: any, _: any, { models }: any) => {
      const episodes = await (models.Episode as EpisodeModel).find({
        show: parent._id,
      });

      return episodes;
    },
  },
};
