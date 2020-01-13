require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const getPetFinderToken = require('./get-petfinder-token.js')
const getPetFinderAnimals = require('./get-petfinder-animals.js')
const queries = require('./queries.js')

const app = express()
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
app.use(bodyParser.urlencoded({ extended: true }))

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
app.post('/validate', (request, response) => {
  console.log('Validating User:', request.body.username, request.body.password, request.body.register)
  if ((request.body.username !== '' && request.body.password !== '') && request.body.register) {
    if (queries.validateUserPassword(request.body.username, request.body.password)) {
      console.log('user exists')
    } else {
      queries.createUser(request.body.username, request.body.password)
    }
  } else {
    queries.validateUserPassword(request.body.username, request.body.password)
  }
  response.redirect('/')
})
app.listen(port, () => { console.log(`Go to http://localhost:${port}/`) })
