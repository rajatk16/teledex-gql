import bcrypt from 'bcryptjs';
import { Model, model, Schema } from 'mongoose';

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  role?: 'User' | 'Admin';
  password: string;
  status: boolean;
  favoriteShows: string[];
}

interface IUserMethods {
  correctPassword(candidatePassword: string, userPassword: string): boolean;
}

const userSchema = new Schema<IUser>({
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ['User', 'Admin'],
    default: 'User',
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: 8,
    select: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  favoriteShows: [
    {
      type: String,
      default: [],
    },
  ],
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.method('correctPassword', async function (candidatePassword: string, userPassword: string) {
  const result = await bcrypt.compare(candidatePassword, userPassword);
  return result;
});

export type UserModel = Model<IUser, {}, IUserMethods>;

export const User = model<IUser, UserModel>('User', userSchema);
