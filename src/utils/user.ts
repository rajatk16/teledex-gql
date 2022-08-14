import { AuthenticationError, ForbiddenError } from 'apollo-server';
import { UserModel } from 'models';
import { handleError } from './error';
import { verifyJwt } from './token';

export const checkIsLoggedIn = async (req: any, getAuthUser: any, models: any) => {
  try {
    // Check if user is logged in
    const authUser = await getAuthUser(req, models);

    if (!authUser) {
      throw new AuthenticationError('You are not logged in');
    }
  } catch (error) {
    handleError(error);
  }
};

export const checkIfAdmin = async (req: any, getAuthUser: any, models: any) => {
  try {
    // Check if user is logged in
    const authUser = await getAuthUser(req, models);

    if (!authUser) {
      throw new AuthenticationError('You are not logged in');
    }

    if (authUser.role !== 'Admin') {
      throw new AuthenticationError('You are not an admin');
    }
  } catch (error) {
    handleError(error);
  }
};

export const authUser = async (req: any, models: any) => {
  try {
    let accessToken;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      accessToken = req.headers.authorization.split(' ')[1];
    }

    if (!accessToken) return false;

    const decoded = verifyJwt(accessToken, 'JWT_ACCESS_PUBLIC_KEY') as any;

    if (!decoded) return false;
    const user = await (models.User as UserModel).findById(decoded.user!);

    if (!user) {
      throw new ForbiddenError('The user belonging to this token no logger exist');
    }

    return user;
  } catch (error) {
    handleError(error);
  }
};
