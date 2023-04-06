const axios = require('axios');

const url = 'https://custom-urls-manifest-updater.redstone.finance/api/custom-urls';

const payload = {
  url: 'https://eloquent-halva-4fbc86.netlify.app/i.json',
  jsonpath: '$.assets.crypto_holdings.tokens[1].value',
  comment: '',
};

axios.post(url, payload)
  .then((response) => {
    console.log(response.resquest.res);
  })
  .catch((error) => {
    console.error(error.response);
  });