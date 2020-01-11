const JsonDB = require('node-json-db').JsonDB
const Config = require('node-json-db/dist/lib/JsonDBConfig').Config
const db = new JsonDB(new Config('database-mock', true, false, '/'))

module.exports.db = db

// INSERT

module.exports.savePet = function (petfinderId, username) {
  db.push(`/users/${username}/savedPets`, petfinderId, false)
  console.log(`${username}'s saved pets:`, db.getData(`/users/${username}/savedPets[-1]`))
}
module.exports.createUser = function (username, password) {
  db.push(`/users/${username}`, {
    username: username,
    password: password,
    savedPets: []
  }, false)
  console.log(`User ${username} created:`, db.getData(`/users/${username}`))
}

// SELECT

module.exports.getSavedPets = function (username) {
  console.log(`${username}'s saved pets:`, db.getData(`/users/${username}/savedPets`))
  return db.getData(`/users/${username}/savedPets`)
}

module.exports.validateUserPassword = function (username, password) {
  const correctPassword = db.getData(`/users/${username}/password`)
  const passwordMatches = correctPassword === password
  console.log(`${username}'s password is valid:`, passwordMatches)
  return passwordMatches
}

// DROP

module.exports.deleteSavedPet = function (petfinderId, username) {
  console.log(`Delete pet #${petfinderId} from ${username}'s saved pets`)
  db.delete(`/users/${username}/savedPets/petfinderId`)
}
