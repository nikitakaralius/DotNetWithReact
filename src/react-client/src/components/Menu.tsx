import React from 'react';

interface IMenuProps {
  onGetPostsClick: () => void;
  onCreatePostClick: () => void;
}

export const Menu: React.FC<IMenuProps> = ({onGetPostsClick, onCreatePostClick}) => {
  return(
    <div>
      <h1 className="text-primary">
        ASP.NET Core with React.ts
      </h1>
      <button className="btn btn-lg btn-primary w-100 mt-2" onClick={onGetPostsClick}>
        Get all posts from server
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-2" onClick={onCreatePostClick}>
        Create a new post
      </button>
    </div>
  )
}