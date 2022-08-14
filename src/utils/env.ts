import { cleanEnv, port, str } from 'envalid';

export const validateEnv = () => {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: port(),
    DATABASE_URL: str(),
    JWT_ACCESS_PRIVATE_KEY: str(),
    JWT_ACCESS_PUBLIC_KEY: str(),
  });
};
