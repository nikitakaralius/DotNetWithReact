import React from 'react';
import {IPost} from '../interfaces';

interface IPostProps {
  post: IPost;
  onUpdate: (post: IPost) => void;
  onDelete: (post: IPost) => void;
}

export const Post: React.FC<IPostProps> = ({post, onUpdate, onDelete}) => {
  return (
    <tr>
      <th scope="row">{post.id}</th>
      <td>{post.title}</td>
      <td>{post.content}</td>
      <td>
        <button className="btn btn-success btn-lg mx-3 my-3" onClick={() => onUpdate(post)}>
          Edit
        </button>
        <button className="btn btn-danger btn-lg" onClick={() => onDelete(post)}>
          Delete
        </button>
      </td>
    </tr>
  );
};