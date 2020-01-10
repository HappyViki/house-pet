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
      if (error.response) {
        console.log(`ERROR Code: ${error.response.status}`)
        console.log(`ERROR Message: axios getPetFinderToken post ${error.response.statusText}`)
        getToken(error.response.statusText)
      } else {
        console.log(`ERROR Code: ${error.code}. Are you offline?`)
      }
    })
}

module.exports = getPetFinderToken
