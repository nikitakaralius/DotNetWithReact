import React from 'react';
import {Form} from 'react-bootstrap';
import {IPost} from '../interfaces';

interface ICreatePostFormProps {
  post: IPost;
  setPost: (post: IPost) => void;
  passedValidation: boolean;
}

export const CreatePostForm: React.FC<ICreatePostFormProps> = ({post, setPost, passedValidation}) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formPostTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          required 
          isInvalid={post.title.length < 1 && !passedValidation}
          isValid={post.title.length > 0}
        />
        <Form.Control.Feedback type="invalid">
          Please enter a title
        </Form.Control.Feedback>
        <Form.Control.Feedback type="valid">
          Looks good!
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPostContent">
        <Form.Label>Content</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter content"
          as="textarea"
          rows={4}
          value={post.content}
          onChange={e => setPost({...post, content: e.target.value})}
          required
          isInvalid={post.content.length < 1 && !passedValidation}
          isValid={post.content.length > 0}
        />
        <Form.Control.Feedback type="invalid">
          Please enter a content
        </Form.Control.Feedback>
        <Form.Control.Feedback type="valid">
          Looks good!
        </Form.Control.Feedback>
      </Form.Group>
    </Form>
  );
};