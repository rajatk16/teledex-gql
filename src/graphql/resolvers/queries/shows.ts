import { ShowModel } from '../../../models';

export const getAllShows = async (_: any, __: any, { models, req }: any) => {
  return (models.Show as ShowModel).find();
};

export const getShowById = async (_: any, args: any, { models }: any) => (models.Show as ShowModel).findById(args.id);

export const getShowByAirDay = async (_: any, args: any, context: any) => {
  return (context.models.Show as ShowModel).find({
    airDay: args.airDay,
  });
};

export const searchShow = async (_: any, args: any, { models }: any) =>
  (models.Show as ShowModel).find({
    $text: {
      $search: args.searchString,
    },
  });
