import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

const root_url = 'http://reduxblog.herokuapp.com/api/posts';
const api_key = '?key=mateos';

export function fetchPosts() {
  const request = axios.get(`${root_url}${api_key}`);
  // console.log('request',request);
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
export function fetchPost(id) {
    const request = axios.get(`${root_url}/${id}${api_key}`);
    return {
      type: FETCH_POST,
      payload: request
  }
}

export function deletePost(id) {
  const request = axios.delete(`${root_url}/${id}${api_key}`);
  return {
    type: DELETE_POST,
    payload: request
  }
}
