import React from 'react';
import {PostsTable} from './components/PostsTable';
import {Container} from './components/Container';

export const App: React.FC = () => {
  return (
    <Container>
      <PostsTable />
    </Container>
  );
};