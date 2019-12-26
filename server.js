// Configure for testing
const testing = true
const testWriteToFile = false
const testFileName = "testpets.json"
// END config

require('dotenv').config()
const https = require('https')
const http = require('http')
const fs = require('fs');
const getPetFinderToken = require('./get-petfinder-token.js')
const getPetFinderAnimals = require('./get-petfinder-animals.js')
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0

let token, pets
let nextPet = 0

if (testing) {
  fs.readFile(testFileName, 'utf8', function(error, contents) {
    if (error) {
      return console.log("TEST ERROR fs.readFile:",error);
    }

    let json = JSON.parse(contents)

    const formatAnimalInfo = (animal)=>{
      let content = ''
      let photo = animal.photos[0] ? animal.photos[0].medium : ''

      content += `<h3>${animal.name}, The ${animal.type}</h3>`
      content += `<img src="${photo}" width=300 height=300/>`
      content += `<p>${animal.distance} miles away</p>`
      content += `<button>No</button>`
      content += `<a href="${animal.url}"><button>Yes</button></a>`
      return content
    }

    if (json.animals) {
      pets = json.animals.map(formatAnimalInfo)
    }

    console.log("TEST JSON file has been read from " + testFileName);
  });
}

if (!testing) {
  let aboutAnHourLong = (60*60*1000) - 10000

  const updatePetfinderToken = (newToken) => {
    token = newToken
  }

  getPetFinderToken(updatePetfinderToken)
  setInterval( getPetFinderToken, aboutAnHourLong, updatePetfinderToken )
}

let requestHandler = (request, response) => {

  if (request.url === "/favicon.ico") {
    response.statusCode = 204
  } else if (request.url === "/")  {
    //getPetFinderAnimals(token, updatePets, location), location: city, state; latitude,longitude; or postal code.

    if (!testing) {
      const updatePets = (newPets) => {
        pets = newPets
      }

      getPetFinderAnimals(token,updatePets)
    }

    let petshtml = ''

    if (pets) {
      petshtml = pets[nextPet]
    }

    response.write('<!DOCTYPE html>');
    response.write('<html>');
    response.write('<body>');
    response.write(petshtml);
    response.write('</body>');
    response.write('</html>');
  } else {
    console.log("FIX new request source found:",request.url);
  }
  response.end();
}

const server = http.createServer(requestHandler);
server.listen(8080)
console.log("Are you listening? ", server.listening);
