const https = require('https')

function getPetFinderToken (getToken) {
  const clientId = process.env.clientId
  const clientSecret = process.env.clientSecret
  let token

  const credentials = JSON.stringify({
    grant_type: 'client_credentials',
    client_id: clientId,
    client_secret: clientSecret
  })

  const headers = {
    hostname: 'api.petfinder.com',
    port: 443,
    path: '/v2/oauth2/token',
    method: 'POST'
  }

  const storeToken = (jsonString) => {
    token = JSON.parse(jsonString).access_token
    console.log('NEW TOKEN')
    return getToken(token)
  }

  const callback = (response) => {
    console.log('STATUS TOKEN:', response.statusCode)

    let jsonString = ''

    response.on('data', dataChunk => {
      jsonString += dataChunk
    })

    response.on('end', () => {
      storeToken(jsonString)
    })
  }

  const errorHandler = (error) => {
    console.error('ERROR TOKEN:', error)
  }

  const requestToken = https.request(headers, callback)
  requestToken.on('error', errorHandler)
  requestToken.write(credentials)
  requestToken.end()
}

module.exports = getPetFinderToken
