const https = require('https')

function getPetFinderAnimals (token, getPets, location = 'utah') {
  console.log('TOKEN USED')

  const processAnimalData = (data) => {
    const json = JSON.parse(data)
    let newPets

    const getAnimalInfo = (animal) => {
      return {id: animal.id, name: animal.name, type: animal.type, url: animal.url, distance: animal.distance}
    }

    if (json.animals) {
      newPets = json.animals.map(getAnimalInfo)
      console.log(`Got ${newPets.length} animals!`)
    } else {
      console.error('No pets found, check the token getter')
    }

    return getPets(newPets)
  }

  const headers = {
    hostname: 'api.petfinder.com',
    port: 443,
    path: '/v2/animals?location=' + location,
    method: 'GET',
    headers: {
      Authorization: ` Bearer ${token}`
    }
  }

  const callback = (response) => {
    console.log('STATUS ANIMALS:', response.statusCode)

    let jsonString = ''

    response.on('data', dataChunk => {
      jsonString += dataChunk
    })

    response.on('end', () => {
      processAnimalData(jsonString)
    })
  }

  const errorHandler = (error) => {
    console.error('ERROR ANIMALS:', error)
  }

  const requestPetFinderAnimals = https.request(headers, callback)
  requestPetFinderAnimals.on('error', errorHandler)
  requestPetFinderAnimals.end()
}

module.exports = getPetFinderAnimals
