require('dotenv').config()
const express = require('express')
const getPetFinderToken = require('./get-petfinder-token.js')
const getPetFinderAnimals = require('./get-petfinder-animals.js')
const queries = require('./queries.js')

const app = express().set('view engine', 'pug')
const port = 8080
let token, pets
const boopedPets = queries.getSavedPets('iAmAUser')

const aboutAnHourLong = (60 * 60 * 1000) - 10000

const updatePetfinderToken = (newToken) => {
  token = newToken
}

getPetFinderToken(updatePetfinderToken)
setInterval(getPetFinderToken, aboutAnHourLong, updatePetfinderToken)

app.use(express.static('public'))

app.get('/favicon.ico', (request, response) => {
  response.status(204).send('Go away favicon request!')
})
app.get('/api', (request, response) => {
  if (token === 'Unauthorized') {
    pets = require('./src/petfinderpets.json').animals
    response.send(JSON.stringify(pets))
  } else if (token) {
    const updatePets = (newPets) => {
      pets = newPets
      response.send(JSON.stringify(pets))
    }
    getPetFinderAnimals(token, updatePets)
  }
})
app.listen(port, () => { console.log(`Go to http://localhost:${port}/`) })
