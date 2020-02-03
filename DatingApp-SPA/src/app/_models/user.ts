import { Photo } from './photo';

export interface User {
  id: number;
  username: string;
  gender: string;
  age: number;
  knownAs: string;
  created: Date;
  lastActive: string;
  city: string;
  country: string;
  photoURL: string;
  interests?: string;
  itroduction?: string;
  lookingfor?: string;
  photos?: Photo[];

}
