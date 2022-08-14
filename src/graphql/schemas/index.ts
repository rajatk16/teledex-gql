import { Show } from './show';
import { Query } from './query';
import { Inputs } from './inputs';
import { Episode } from './episode';
import { Token, User } from './user';
import { Mutation } from './mutation';

export const typeDefs = [Query, Show, User, Episode, Mutation, ...Inputs, Token];
