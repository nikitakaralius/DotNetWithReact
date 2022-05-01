import React, {useEffect, useState} from 'react';
import {IPost} from './interfaces';
import {PostsTable} from './components/PostsTable';
import {Container} from './components/Container';

export const App: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([])
  
  useEffect(() => {
    
  }, [])
  
  return (
    <Container>
      <PostsTable/>
    </Container>
  );
};