const axios = require('axios');

module.exports = (callback) => 
    axios({
        method: 'get',
        url: 'https://api.helium.io/v1/hotspots/112mC2nJJzsFUeefscBi5kvX77AKqksivCYt48WuXEi27Srwy2WY',
    })
    .then(response => callback(response.data));

    