const API_URL_DEVELOPMENT = 'https://localhost:7288';
const API_URL_PRODUCTION = 'undefined';

type Environment = 'Development' | 'Production'

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

const endpointsFor = (environment: Environment): IEndpoints => {
  const url = environment === 'Development' ? API_URL_DEVELOPMENT : API_URL_PRODUCTION;

  return {
    getAllPosts: `${url}/${endpoints.getAllPosts}`,
    getPostById: `${url}/${endpoints.getPostById}`,
    createPost: `${url}/${endpoints.createPost}`,
    updatePost: `${url}/${endpoints.updatePost}`,
    deletePostById: `${url}/${endpoints.deletePostById}`
  };
};

const development = endpointsFor('Development');

const production = endpointsFor('Production');

export const Constants = process.env.NODE_ENV === 'development' ? development : production;