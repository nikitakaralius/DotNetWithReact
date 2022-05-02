import React, {useEffect, useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import {PostForm} from './PostForm';
import {IPost} from '../interfaces';
import {PostService} from '../backend/PostService';

interface IUpdatePostModalProps {
  post: IPost;
  setPost: (post: IPost) => void;
  shown: boolean;
  onHide: () => void;
  onUpdate: () => void;
}

export const UpdatePostModal: React.FC<IUpdatePostModalProps> = ({shown, onHide, onUpdate, post, setPost}) => {
  const [titleValid, setTitleValid] = useState(true);
  const [contentValid, setContentValid] = useState(true);

  useEffect(() => {
    if (titleValid) {
      return;
    }
    setTitleValid(post.title.length !== 0);
  }, [post.title]);

  useEffect(() => {
    if (contentValid) {
      return;
    }
    setContentValid(post.content.length !== 0);
  }, [post.content]);

  const createPost = () => {

    setTitleValid(post.title.length !== 0);
    setContentValid(post.content.length !== 0);

    if (post.title.length === 0 || post.content.length === 0) {
      return;
    }

    PostService
      .updatePost(post)
      .then(_ => onUpdate());
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
          Edit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};