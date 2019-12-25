const https = require('https')

function getPetFinderAnimals(token, location='utah') {
  console.log("OLD Petfinder token used");

  const processAnimalData = (data) => {
    let json = JSON.parse(data)
    const getAnimalInfo = (animal)=>{
      return [animal.name, animal.type, animal.url, animal.distance]
    }

    if (json.animals) {
      pets = json.animals.map(getAnimalInfo)
    }

    console.log(`Got ${pets.length} animals!`);
  }

  const headers = {
          hostname: 'api.petfinder.com',
          port: 443,
          path: '/v2/animals?location=' + location,
          method: 'GET',
          headers: {
              Authorization: ` Bearer ${token}`
         }
  };

  const callback = (response) => {
    console.log('STATUS getPetFinderAnimals:', response.statusCode);

    let jsonString = ''

    response.on('data', dataChunk => {
      jsonString += dataChunk
    })

    response.on('end', () => {
      processAnimalData(jsonString)
    })
  }

  const errorHandler = (error) => {
    console.error("ERROR requestPetFinderAnimals:",error)
  }

  const requestPetFinderAnimals = https.request(headers, callback);
  requestPetFinderAnimals.on('error', errorHandler);
  requestPetFinderAnimals.end();
}

module.exports = getPetFinderAnimals
