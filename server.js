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

if (testing) {
  fs.readFile(testFileName, 'utf8', function(error, contents) {
    if (error) {
      return console.log("TEST ERROR fs.readFile:",error);
    }

    let json = JSON.parse(contents)

    if (json.animals) {
      pets = json.animals
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

    const formatAnimalInfo = (animal)=>{
      let content = ''

      content += `<h3>${animal.name}, The ${animal.type}</h3>`
      content += `<img src="${animal.photos[0].medium}" width=300 height=300/>`
      content += `<p>${animal.distance} miles away</p>`
      content += `<button onclick="boop()">Save</button>`
      content += `<button>Next</button>`
      return content
    }

    let petshtml = ''

    if (pets) {
      petshtml = formatAnimalInfo(pets[1])
    }

    response.write('<!DOCTYPE html>');
    response.write('<html>');
    response.write('<body>');
    response.write(petshtml);
    response.write('<script>const boop = () => alert("boop")</script>');
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
