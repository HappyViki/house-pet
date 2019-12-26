require('dotenv').config()
const https = require('https')
const http = require('http')
const getPetFinderToken = require('./get-petfinder-token.js')
const getPetFinderAnimals = require('./get-petfinder-animals.js')
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0

let token
let pets

const updatePetfinderToken = (newToken) => {
  token = newToken
}

getPetFinderToken(updatePetfinderToken)

let requestHandler = (request, response) => {

  if (request.url === "/favicon.ico") {
    response.statusCode = 204
  } else if (request.url === "/")  {
    //getPetFinderAnimals(token, updatePets, location), location: city, state; latitude,longitude; or postal code.
    const updatePets = (newPets) => {
      pets = newPets
    }
    getPetFinderAnimals(token,updatePets)

    let petshtml = ''

    const formatAnimalArray = (pet) => {
      return `<a href="${pet[2]}">${pet[0]} is a ${pet[1]}, and is ${pet[3]} miles away</a><br/>`
    }

    if (pets) {
      petshtml = pets.map(formatAnimalArray).join('')
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

//setTimeout(getPetFinderToken, (60*60*1000) - 10000)

const server = http.createServer(requestHandler);
server.listen(8080)
console.log("Are you listening? ", server.listening);
