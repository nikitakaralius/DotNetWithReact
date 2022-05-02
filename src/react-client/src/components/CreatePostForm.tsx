import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import {IPost} from '../interfaces';

interface ICreatePostFormProps {
  post: IPost;
  setPost: (post: IPost) => void;
}

export const CreatePostForm: React.FC<ICreatePostFormProps> = ({post, setPost}) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formPostTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
        />
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
        />
      </Form.Group>
    </Form>
  );
};