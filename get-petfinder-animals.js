const axios = require('axios')

function getPetFinderAnimals (token, getPets, parameters = {}) {
  console.log('TOKEN USED')

  const animalsUrl = 'https://api.petfinder.com/v2/animals?location=84104'
  const animalsConfig = {
    headers: {
      Authorization: ` Bearer ${token}`
    }
  }

  axios.get(animalsUrl, animalsConfig)
    .then(function (response) {
      const newPets = response.data.animals

      if (newPets) {
        getPets(newPets)
        console.log(`Got ${newPets.length} animals!`)
      } else {
        console.error('No pets found, might be an error')
      }
    })
    .catch(function (error) {
      console.log(`ERROR: ${error.response.status} ${error.response.statusText}`)
      console.log('Check if your token is valid')
      getPets(error.response.statusText)
    })
}

module.exports = getPetFinderAnimals
