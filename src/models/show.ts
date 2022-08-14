import mongoose, { Model, model } from 'mongoose';

const { Schema } = mongoose;

interface IShow {
  title: string;
  coverImg?: string;
  network: string;
  genre: string;
  airDay: string;
  length: number;
  status: string;
  description: string;
  noOfseasons: string;
  noOfepisodes: string;
}

const showSchema = new Schema<IShow>({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  coverImg: {
    type: String,
    trim: true,
  },
  network: {
    type: String,
    trim: true,
    required: true,
  },
  genre: {
    type: String,
    trim: true,
    required: true,
  },
  airDay: {
    type: String,
    trim: true,
    required: true,
  },
  length: {
    type: Number,
    trim: true,
    required: true,
  },
  status: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  noOfseasons: {
    type: String,
    trim: true,
    required: true,
  },
  noOfepisodes: {
    type: String,
    trim: true,
    required: true,
  },
});

showSchema.index({
  name: 'text',
  title: 'text',
});

export const Show = model<IShow>('Show', showSchema);

export type ShowModel = Model<IShow>;
