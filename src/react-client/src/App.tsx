import React, {useState} from 'react';
import {IPost} from './interfaces';
import {PostsTable} from './components/PostsTable';
import {Container} from './components/Container';
import {Menu} from './components/Menu';
import {CreatePostModal} from './components/CreatePostModal';
import {PostService} from './backend/PostService';
import {useHidden} from './hooks/useHidden';
import {UpdatePostModal} from './components/UpdatePostModal';

export const App: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [postToUpdate, setPostToUpdate] = useState<IPost>({id: 0, title: '', content: ''});

  const [createModalShown, showCreateModal, hideCreateModal] = useHidden(false);
  const [updateModalShown, showUpdateModal, hideUpdateModal] = useHidden(false);

  const fetchPosts = () => {
    PostService.getAllPosts()
      .then(postsFromServer => setPosts(postsFromServer));
  };

  const deletePost = (post: IPost) => {
    PostService
      .deletePost(post.id)
      .then(() => fetchPosts());
  };

  const selectPostToUpdate = (post: IPost) => {
    showUpdateModal();
    setPostToUpdate(post);
  };

  return (
    <Container>
      <Menu onGetPostsClick={fetchPosts} onCreatePostClick={showCreateModal}/>
      <CreatePostModal
        shown={createModalShown}
        onHide={hideCreateModal}
        onCreate={fetchPosts}
      />
      <UpdatePostModal
        post={postToUpdate}
        setPost={setPostToUpdate}
        shown={updateModalShown}
        onHide={hideUpdateModal}
        onUpdate={fetchPosts}
      />
      <PostsTable
        posts={posts}
        onUpdatePost={selectPostToUpdate}
        onDeletePost={deletePost}
      />
    </Container>
  );
};
