// Configure for testing
const testWriteToFile = false
const testFileName = "testpets.json"

const https = require('https')
const fs = require('fs');

function getPetFinderAnimals(token, getPets, location='utah') {
  console.log("TOKEN USED");

  const processAnimalData = (data) => {
    if (testWriteToFile) {
      fs.writeFile(testFileName, data, 'utf8', function (error) {
        if (error) {
          return console.log("TEST ERROR fs.writeFile:",error);
        }

        console.log("TEST JSON file has been saved to " + testFileName);
      });
    }

    let json = JSON.parse(data)

    const getAnimalInfo = (animal)=>{
      return [animal.name, animal.type, animal.url, animal.distance]
    }

    if (json.animals) {
      pets = json.animals.map(getAnimalInfo)
    }

    console.log(`Got ${pets.length} animals!`);

    return getPets(pets)
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
    console.log('STATUS ANIMALS:', response.statusCode);

    let jsonString = ''

    response.on('data', dataChunk => {
      jsonString += dataChunk
    })

    response.on('end', () => {
      processAnimalData(jsonString)
    })
  }

  const errorHandler = (error) => {
    console.error("ERROR ANIMALS:",error)
  }

  const requestPetFinderAnimals = https.request(headers, callback);
  requestPetFinderAnimals.on('error', errorHandler);
  requestPetFinderAnimals.end();
}

module.exports = getPetFinderAnimals
