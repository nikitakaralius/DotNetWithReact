import React, {useEffect, useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import {PostForm} from './PostForm';
import {IPost} from '../interfaces';
import {PostService} from '../backend/PostService';

interface ICreatePostModalProps {
  shown: boolean;
  onHide: () => void;
  onCreate: () => void;
}

export const CreatePostModal: React.FC<ICreatePostModalProps> = ({shown, onHide, onCreate}) => {
  const emptyPost: IPost = {
    id: 0,
    title: '',
    content: ''
  };

  const [post, setPost] = useState<IPost>(emptyPost);
  const [titleValid, setTitleValid] = useState(true);
  const [contentValid, setContentValid] = useState(true);
  
  useEffect(() => {
    if (titleValid) {
      return
    }
    setTitleValid(post.title.length !== 0);
  }, [post.title])
  
  useEffect(() => {
    if (contentValid) {
      return
    }
    setContentValid(post.content.length !== 0);
  }, [post.content])
  
  const createPost = () => {
    
    setTitleValid(post.title.length !== 0);
    setContentValid(post.content.length !== 0);
    
    if (post.title.length === 0 || post.content.length === 0) {
      return;
    }
    
    PostService
      .createPost(post)
      .then(_ => onCreate());
    setPost(emptyPost);
    onHide();
  };

  return (
    <Modal show={shown} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Describe your post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PostForm
          post={post}
          setPost={setPost}
          titleValid={titleValid}
          contentValid={contentValid}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={createPost}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
};