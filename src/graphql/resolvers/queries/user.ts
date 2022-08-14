import { UserModel } from '../../../models';
import { checkIsLoggedIn, handleError } from './../../../utils';

export const getAllUsers = async (_: any, __: any, { models }: any) => await (models.User as UserModel).find();

export const logoutUser = async (_: any, __: any, { req, res, getAuthUser, models }: any) => {
  try {
    await checkIsLoggedIn(req, getAuthUser, models);

    return true;
  } catch (error) {
    handleError(error);
  }
};

export const getMe = async (_: any, __: any, { req, getAuthUser, models }: any) => {
  try {
    await checkIsLoggedIn(req, getAuthUser, models);

    const user = await getAuthUser(req, models);

    return user;
  } catch (error) {
    handleError(error);
  }
};
