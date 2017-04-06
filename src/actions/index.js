import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

const root_url = 'http://reduxblog.herokuapp.com/api/posts';
const api_key = '?key=mateos';

export function fetchPosts() {
  const request = axios.get(`${root_url}${api_key}`);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(props) {
  const request = axios.post(`${root_url}${api_key}`,props);

  return {
    type : CREATE_POST,
    payload: request
  }
}
