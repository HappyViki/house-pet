require('dotenv').config()
const express = require('express')
const getPetFinderToken = require('./get-petfinder-token.js')
const getPetFinderAnimals = require('./get-petfinder-animals.js')
const queries = require('./queries.js')

const app = express().set('view engine', 'pug')
const port = 8080
let token, pets
let boopedPets = queries.getBoops(0)

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
app.get('/pets.json', (request, response) => {
  if (token) {
    const updatePets = (newPets) => {
      pets = newPets
      response.send(pets)
    }
    getPetFinderAnimals(token, updatePets)
  }
  response.sendFile('dashboard.js', {root: 'client' })
})
app.listen(port, () => { console.log(`Go to http://localhost:${port}/`) })
