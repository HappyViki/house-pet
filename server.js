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

const updatePets = (newPets) => {
  pets = newPets
}

const updatePetfinderToken = (newToken) => {
  token = newToken
  getPetFinderAnimals(token, updatePets)
}

getPetFinderToken(updatePetfinderToken)
setInterval(getPetFinderToken, aboutAnHourLong, updatePetfinderToken)

app.get('/', (request, response) => {
  response.send(JSON.stringify(pets))
})
app.get('/dashboard', (request, response) => {
  response.send('dashboard')
})
app.get('/favicon.ico', (request, response) => {
  response.status(204).send('Go away favicon request!')
})
app.listen(port, () => { console.log(`Go to http://localhost:${port}/`) })
