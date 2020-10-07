import axios from 'axios';

let token = document.head.querySelector('meta[name="csrf-token"]')


let baseURL = 'http://localhost:8000/api'

let apiClient = axios.create({
  baseURL,
  headers: {
    'X-CSRF-TOKEN': token.content
  }

});

// apiClient.interceptors.response.use(undefined,
//   (error) => {
//     if (error.response.status === 419) {
//       refreshAppTokens()
//       // return Promise.reject(error)
//     }
//   }
// )

// function refreshAppTokens() {
//   // Retrieve a new page with a fresh token
//   apiClient.get('')
//     .then(({
//       data
//     }) => {
//       const wrapper = document.createElement('div');
//       wrapper.innerHTML = data;
//       return div.querySelector('meta[name=csrf-token]').getAttribute('content');
//     })
//     .then((token) => {
//       apiClient.defaults.headers['X-CSRF-TOKEN'] = token;
//       window.Laravel.csrfToken = token;
//       document.querySelector('meta[name=csrf-token]').setAttribute('content', token);
//     });
// }

export default apiClient
