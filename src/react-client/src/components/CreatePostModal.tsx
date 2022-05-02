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
  const [postValid, setPostValid] = useState(true);
  
  const validate = (post: IPost) => {
    return post.title.length > 0 && post.content.length > 0;
  };

  const createPost = () => {
    if (!validate(post)) {
      setPostValid(false)
      return;
    }
    PostService
      .createPost(post)
      .then(_ => onCreate());
    setPost(defaultPost);
    setPostValid(true)
    onHide();
  };

  return (
    <Modal show={shown} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Describe your post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CreatePostForm post={post} setPost={setPost} passedValidation={postValid}/>
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