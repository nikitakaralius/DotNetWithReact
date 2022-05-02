import React from 'react';
import {IPost} from '../interfaces';
import {Post} from './Post';

interface IPostTableProps {
  posts: IPost[];
}

export const PostsTable: React.FC<IPostTableProps> = ({posts}) => {
  
  const table = () => {
    return (
        <table className="table table-striped table-bordered border-light">
          <thead>
          <tr>
            <th scope="col" className="text-center">Post Id</th>
            <th scope="col" className="text-center">Title</th>
            <th scope="col" className="text-center">Content</th>
            <th scope="col" className="text-center">CRUD Operations</th>
          </tr>
          </thead>
          <tbody>
          {posts.map(post => <Post post={post}/>)}
          </tbody>
        </table>
    )
  }
  
  return (
    <div className="table-responsive mt-5">
      {posts.length > 0 && table()}
    </div>
  );
};