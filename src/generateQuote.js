import axios from 'axios';
function generateQuote() {
  //   return 'Be yourself; everyone else is already taken.';
  // axios.get('https://api.quotable.io/random')
  axios
    .get('https://api.quotable.io/random')
    .then((response) => {
      console.log(response.data);
      document.getElementById('quote').innerHTML = response.data.content;
    })
    .catch((error) => {
      console.log(error);
    });
}

export default generateQuote;
