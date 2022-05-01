import React from 'react';

export const PostsTable: React.FC = () => {
  return (
    <div className="table-responsive mt-5">
      <table className="table table-bordered border-dark">
        <thead>
        <tr>
          <th scope="col">Post Id</th>
          <th scope="col">Titgle</th>
          <th scope="col">Content</th>
          <th scope="col">CRUD Operations</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Post 1 Title</td>
          <td>Post 1 Content</td>
          <td>
            <button className="btn btn-dark btn-lg mx-3 my-3">
              Update
            </button>
            <button className="btn btn-secondary btn-lg">
              Delete
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};