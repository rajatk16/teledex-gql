import { ShowModel } from '../../../models';
import { checkIfAdmin, handleError } from '../../../utils';

export const createShow = async (_: any, args: any, { req, getAuthUser, models }: any) => {
  try {
    await checkIfAdmin(req, getAuthUser, models);

    const show = await (models.Show as ShowModel).create({
      ...args.data,
    });

    return show;
  } catch (error) {
    handleError(error);
  }
};

export const updateShow = async (_: any, args: any, { req, getAuthUser, models }: any) => {
  try {
    await checkIfAdmin(req, getAuthUser, models);

    const show = await (models.Show as ShowModel).findByIdAndUpdate(
      args.showId,
      {
        ...args.data,
      },
      {
        new: true,
      }
    );

    return show;
  } catch (error) {
    handleError(error);
  }
};
