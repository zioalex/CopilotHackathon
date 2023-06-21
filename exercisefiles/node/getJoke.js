var axios = require('axios');

function getJoke() {
  axios.get('https://api.chucknorris.io/jokes/random')
      .then(function (response) {
          console.log(response.data.value);
          // return response.data.value;
      })
      .catch(function (error) {
          console.log(error);
          // return error
      });
}

function getJoke2() {
  axios.get('https://api.chucknorris.io/jokes/random')
      .then(function (response) {
          console.log(response.data.value);
          // return response.data.value;
      })
      .catch(function (error) {
          console.log(error);
          // return error
      });
}
// getJoke();
getJoke2();