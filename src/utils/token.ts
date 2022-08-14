import jwt from 'jsonwebtoken';
import { handleError } from './error';

export const signJwt = (payload: any, key: string, options?: any) => {
  const privateKey = Buffer.from(process.env[key]!, 'base64').toString('ascii');
  return jwt.sign(payload, privateKey, {
    ...(options && options),
    algorithm: 'RS256',
  });
};

export const verifyJwt = (token: any, key: string) => {
  try {
    const publicKey = Buffer.from(process.env[key]!, 'base64').toString('ascii');
    const decoded = jwt.verify(token, publicKey);
    return decoded;
  } catch (error) {
    handleError(error);
  }
};
