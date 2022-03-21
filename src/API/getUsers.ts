import axios from 'axios';

import { IUser } from '../interfaces/IUser';


export async function getUsers(): Promise<IUser[]> {
  const { data } = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');

  return data;
}
