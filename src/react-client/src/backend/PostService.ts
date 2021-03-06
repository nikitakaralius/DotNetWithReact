import axios from 'axios';
import {IPost} from '../interfaces';
import {Constants} from './Constants';

export namespace PostService {
  export const getAllPosts = async () => {
    const url = Constants.getAllPosts;
    const response = await axios.get(url);
    return response.data as IPost[];
  };

  export const createPost = async (post: IPost) => {
    const url = Constants.createPost;
    return await axios.post(url, post);
  };

  export const deletePost = async (postId: number) => {
    const url = `${Constants.deletePostById}/${postId}`;
    return await axios.delete(url);
  };

  export const updatePost = async (post: IPost) => {
    const url = Constants.updatePost;
    return await axios.put(url, post);
  };
}