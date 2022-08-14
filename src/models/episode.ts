import { Model, model, Schema } from 'mongoose';

interface IEpisode {
  title: string;
  coverImg?: string;
  description?: string;
  episodeNumber: string;
  airDate: string;
  episodeLength: number;
  show: string;
}

const episodeSchema = new Schema<IEpisode>({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  coverImg: {
    type: String,
    trim: true,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  episodeNumber: {
    type: String,
    required: true,
  },
  airDate: {
    type: String,
    required: true,
  },
  episodeLength: {
    type: Number,
    required: true,
  },
  show: {
    type: String,
    default: '',
  },
});

episodeSchema.index({
  name: 'text',
});

export const Episode = model<IEpisode>('Episode', episodeSchema);

export type EpisodeModel = Model<IEpisode>;
