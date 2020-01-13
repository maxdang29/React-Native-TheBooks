import axios from 'axios';

const API_URL = 'https://the-books-api-staging.enouvo.com';

export default function callApi(endpoint, method = 'GET', body) {
  return axios({
    method: method,
    url: `${API_URL}${endpoint}`,
    data: body,
  })
    .then(function(response) {
      return response;
    })
    .catch(err => {
      throw err.response;
    });
}
