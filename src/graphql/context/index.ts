import { Show, User, Episode } from '../../models';
import { authUser as getAuthUser } from '../../utils';

export const context = ({ req, res }: any) => ({
  req,
  res,
  getAuthUser,
  models: {
    Show,
    User,
    Episode,
  },
});
