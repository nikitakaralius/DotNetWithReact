import React, {useState} from 'react';
import {IPost} from './interfaces';
import {PostsTable} from './components/PostsTable';
import {Container} from './components/Container';
import {Menu} from './components/Menu';
import {CreatePostModal} from './components/CreatePostModal';
import {PostService} from './backend/PostService';

export const App: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const [modalShown, setModalShown] = useState(false);
  const showModal = () => setModalShown(true);
  const hideModal = () => setModalShown(false);

  const fetchPosts = () => {
    PostService.getAllPosts()
      .then(postsFromServer => setPosts(postsFromServer));
  };
  
  const deletePost = (post: IPost) => {
    PostService
      .deletePost(post.id)
      .then(() => fetchPosts())
  }

  return (
    <Container>
      <Menu onGetPostsClick={fetchPosts} onCreatePostClick={showModal}/>
      <CreatePostModal shown={modalShown} onHide={hideModal} onCreate={fetchPosts}/>
      <PostsTable posts={posts} onDeletePost={deletePost}/>
    </Container>
  );
};