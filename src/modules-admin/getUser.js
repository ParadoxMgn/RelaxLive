import { auth } from './auth';

export const getUser = () => {
  return fetch('http://localhost:4545/users')
    .then(response => response.json())
    .then(data => auth(data))
    .catch(err => console.log(err));
};