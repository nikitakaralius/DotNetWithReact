const API_URL_DEVELOPMENT = 'https://localhost:7288';
const API_URL_PRODUCTION = 'undefined';

interface IEndpoints {
  getAllPosts: string;
  getPostById: string;
  createPost: string;
  updatePost: string;
  deletePostById: string;
}

const endpoints: IEndpoints = {
  getAllPosts: 'get-all-posts',
  getPostById: 'get-post-by-id',
  createPost: 'create-post',
  updatePost: 'update-post',
  deletePostById: 'delete-post-by-id'
};

const development: IEndpoints = {
  getAllPosts: `${API_URL_DEVELOPMENT}/${endpoints.getAllPosts}`,
  getPostById: `${API_URL_DEVELOPMENT}/${endpoints.getPostById}`,
  createPost: `${API_URL_DEVELOPMENT}/${endpoints.createPost}`,
  updatePost: `${API_URL_DEVELOPMENT}/${endpoints.updatePost}`,
  deletePostById: `${API_URL_DEVELOPMENT}/${endpoints.deletePostById}`
};

const production: IEndpoints = {
  getAllPosts: `${API_URL_PRODUCTION}/${endpoints.getAllPosts}`,
  getPostById: `${API_URL_PRODUCTION}/${endpoints.getPostById}`,
  createPost: `${API_URL_PRODUCTION}/${endpoints.createPost}`,
  updatePost: `${API_URL_PRODUCTION}/${endpoints.updatePost}`,
  deletePostById: `${API_URL_PRODUCTION}/${endpoints.deletePostById}`
};

export const Constants = process.env.NODE_ENV === 'development' ? development : production;