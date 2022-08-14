import { AuthenticationError, ForbiddenError } from 'apollo-server';

import { UserModel } from '../../../models';
import { checkIsLoggedIn, handleError, signJwt } from '../../../utils';

export const createUser = async (_: any, args: any, { models }: any) => {
  try {
    const user = await (models.User as UserModel).create({
      ...args.data,
    });
    return user;
  } catch (error: any) {
    if (error.code === 11000) {
      throw new ForbiddenError('User already exist');
    }
    handleError(error);
  }
};

export const signTokens = (user: any) => {
  const accessToken = signJwt({ user: user.id }, 'JWT_ACCESS_PRIVATE_KEY');

  return {
    accessToken,
  };
};

export const loginUser = async (_: any, args: any, { models, res }: any) => {
  try {
    const user = await (models.User as UserModel).findOne({ email: args.data.email }).select('+password');

    if (!user || !(await user.correctPassword(args.data.password, user.password))) {
      throw new AuthenticationError('Invalid email or password');
    }

    const { accessToken } = signTokens(user);

    return {
      status: 'success',
      accessToken,
    };
  } catch (error) {
    handleError(error);
  }
};

export const updateUser = async (_: any, args: any, { req, getAuthUser, models }: any) => {
  try {
    await checkIsLoggedIn(req, getAuthUser, models);

    const user = await getAuthUser(req, models);

    const updatedUser = await (models.User as UserModel).findByIdAndUpdate(
      user._id,
      {
        ...args.data,
      },
      {
        new: true,
      }
    );

    return updatedUser;
  } catch (error) {
    handleError(error);
  }
};
