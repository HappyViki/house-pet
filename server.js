require('dotenv').config()
const http = require('http')
const getPetFinderToken = require('./get-petfinder-token.js')
const getPetFinderAnimals = require('./get-petfinder-animals.js')

let token

const aboutAnHourLong = (60 * 60 * 1000) - 10000

const updatePetfinderToken = (newToken) => {
  token = newToken
}

getPetFinderToken(updatePetfinderToken)
setInterval(getPetFinderToken, aboutAnHourLong, updatePetfinderToken)

const requestHandler = (request, response) => {
  const url = request.url

  response.writeHead(200, {
    'Content-Type': 'text/html'
  })

  if (url === '/') {
    // getPetFinderAnimals(token, updatePets, location), location: city, state; latitude,longitude; or postal code.
    let pets

    const updatePets = (newPets) => {
      pets = newPets
    }

    getPetFinderAnimals(token, updatePets)

    response.write('<h1>Home</h1>')
    response.write(JSON.stringify(pets))
  } else if (url === '/dashboard') {
    response.write('<h1>Dashboard</h1>')
  } else if (url === '/favicon.ico') {
    response.statusCode = 204
  } else {
    console.log('FIX new request source found:', request.url)
    response.write('404 page not found!')
  }
  response.end()
}

const server = http.createServer(requestHandler).listen(8080)
if (server.listening) {
  console.log('Go to http://localhost:8080/')
}
