import React, {useEffect, useState} from 'react';
import {IPost} from './interfaces';
import {PostsTable} from './components/PostsTable';
import {Container} from './components/Container';
import {getAllPosts} from './backend/PostService';
import {Header} from './components/Header';

export const App: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    getAllPosts()
      .then(postsFromServer => setPosts(postsFromServer));
  }, []);

  return (
    <Container>
      <Header/>
      <PostsTable posts={posts}/>
    </Container>
  );
};