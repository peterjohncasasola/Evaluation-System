import axios from 'axios';
import store from '../js/store'
import router from '../js/router'

const baseURL = 'http://localhost:8000/api'

const apiClient = axios.create({
  baseURL,
});


// const token = localStorage.getItem('token');

// if (token) {
//   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// }

axios.interceptors.response.use(undefined, (error) => {
  if (error.response && error.response.status === 401) {
    localStorage.removeItem('token', null);
    // store.state.auth.isLoggedIn = false;
    // store.state.auth.token = null;
    window.router.push('/');
    return Promise.resolve(error.response);
  }
  if (error.response && error.response.status === 419) {
    return refreshAppTokens().then(() => Promise.reject(error));
  }

});

function refreshAppTokens() {
  // Retrieve a new page with a fresh token
  axios.get('/')
    .then(({
      data
    }) => {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = data;
      return div.querySelector('meta[name=csrf-token]').getAttribute('content');
    })
    .then((token) => {
      axios.defaults.headers['X-CSRF-TOKEN'] = token;
      window.Laravel.csrfToken = token;
      document.querySelector('meta[name=csrf-token]').setAttribute('content', token);
    });
}

export default apiClient
