import axios from 'axios';
import {IPost} from '../interfaces';

export const getAllPosts = async () => {
  const url = 'https://localhost:7288/get-all-posts';
  const response = await axios.get(url);
  return response.data as IPost[];
};