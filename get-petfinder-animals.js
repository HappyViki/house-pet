const axios = require('axios')

function getPetFinderAnimals (token, getPets, location = 'utah') {
  console.log('TOKEN USED')

  const animalsUrl = 'https://api.petfinder.com/v2/animals'
  const animalsConfig = {
    headers: {
      Authorization: ` Bearer ${token}`
    }
  }

  axios.get(animalsUrl, animalsConfig)
  .then(function (response) {
    let newPets = response.data.animals

    if (newPets) {
      getPets(newPets)
      console.log(`Got ${newPets.length} animals!`)
    } else {
      console.error('No pets found, might be an error')
    }
  })
  .catch(function (error) {
    console.log(error)
  })
}

module.exports = getPetFinderAnimals
