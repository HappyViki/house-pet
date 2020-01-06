const axios = require('axios')

function getPetFinderToken (getToken) {
  const clientId = process.env.clientId
  const clientSecret = process.env.clientSecret

  const tokenUrl = 'https://api.petfinder.com/v2/oauth2/token'
  const tokenConfig = {
    grant_type: 'client_credentials',
    client_id: clientId,
    client_secret: clientSecret
  }

  axios.post(tokenUrl, tokenConfig)
    .then(function (response) {
      const newToken = response.data.access_token
      getToken(newToken)
      console.log('NEW TOKEN', response.status)
    })
    .catch(function (error) {
      console.log(error)
    })
}

module.exports = getPetFinderToken
