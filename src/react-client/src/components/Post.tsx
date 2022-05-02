import React from 'react';
import {IPost} from '../interfaces';

interface IPostProps {
  post: IPost;
}

export const Post: React.FC<IPostProps> = ({post}) => {
  return (
    <tr key={post.id}>
      <th scope="row">{post.id}</th>
      <td>{post.title}</td>
      <td>{post.content}</td>
      <td>
        <button className="btn btn-success btn-lg mx-3 my-3">
          Update
        </button>
        <button className="btn btn-danger btn-lg">
          Delete
        </button>
      </td>
    </tr>
  );
};