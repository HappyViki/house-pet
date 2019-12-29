require('dotenv').config()
const express = require('express')
const getPetFinderToken = require('./get-petfinder-token.js')
const getPetFinderAnimals = require('./get-petfinder-animals.js')

const app = express().set('view engine', 'pug')
const port = 8080
let token, pets

const aboutAnHourLong = (60 * 60 * 1000) - 10000

const updatePetfinderToken = (newToken) => {
  token = newToken
}

getPetFinderToken(updatePetfinderToken)
setInterval(getPetFinderToken, aboutAnHourLong, updatePetfinderToken)

app.get('/', (request, response) => {
  const updatePets = (newPets) => {
    pets = newPets
    let name = pets[0].name
    let url = pets[0].url
    response.render('index', { title: 'Home', name: name, url: url })
  }

  getPetFinderAnimals(token, updatePets)
})
app.get('/dashboard', (request, response) => {
  response.render('dashboard', { title: 'Dashboard', boopedPets: [0, 1, 2] })
})
app.get('/favicon.ico', (request, response) => {
  response.status(204).send('Go away favicon request!')
})
app.listen(port, () => { console.log(`Go to http://localhost:${port}/`) })
