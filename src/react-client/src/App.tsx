import React, {useState} from 'react';
import {IPost} from './interfaces';
import {PostsTable} from './components/PostsTable';
import {Container} from './components/Container';
import {Menu} from './components/Menu';
import {getAllPosts} from './backend/PostService';

export const App: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const fetchPosts = () => {
    getAllPosts()
      .then(postsFromServer => setPosts(postsFromServer));
  };
  
  return (
    <Container>
      <Menu onGetPostsClick={fetchPosts} onCreatePostClick={() => {}}/>
      <PostsTable posts={posts}/>
    </Container>
  );
};