import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import {CreatePostForm} from './CreatePostForm';
import {IPost} from '../interfaces';
import {PostService} from '../backend/PostService';

interface ICreatePostModalProps {
  shown: boolean;
  onHide: () => void;
  onCreate: () => void;
}

export const CreatePostModal: React.FC<ICreatePostModalProps> = ({shown, onHide, onCreate}) => {
  const defaultPost: IPost = {
    id: 0,
    title: '',
    content: ''
  };

  const [post, setPost] = useState<IPost>(defaultPost);

  const createPost = () => {
    PostService
      .createPost(post)
      .then(_ => onCreate())
    setPost(defaultPost);
    onHide();
  };

  return (
    <Modal show={shown} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Describe your post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CreatePostForm post={post} setPost={setPost}/>
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