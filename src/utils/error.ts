import { ApolloError } from 'apollo-server';

const handleCastError = (error: any) => {
  const message = `Invalid ${error.path}: ${error.value}`;
  throw new ApolloError(message, 'GRAPHQL_VALIDATION_FAILED');
};

const handleValidationError = (error: any) => {
  const message = Object.values(error.errors).map((el: any) => el.message);

  throw new ApolloError(`Invalid input: ${message.join(', ')}`, 'GRAPHQL_VALIDATION_FAILED');
};

export const handleError = (err: any) => {
  if (err.name === 'CastError') handleCastError(err);
  if (err.name === 'ValidationError') handleValidationError(err);
  throw err;
};
