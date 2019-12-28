const JsonDB = require('node-json-db').JsonDB;
const Config = require('node-json-db/dist/lib/JsonDBConfig').Config;

module.exports.db = new JsonDB(new Config("database-mock", true, false, '/'));

// have 2 users

// Function boop(petfinderId, userId)
// Description: add pet to list with user foreign key
// Example:
// "3": { // unique primary key
//   "petfinderid": 222, // id of pet from petfinder
//   "userid": 1, // id of user from user table, index key
// }

module.exports.boop = function (petfinderId, userId) {
  db.push("/users/userId/pets", [{
    petfinderid: petfinderId, // id of pet from petfinder
    userid: userId, // id of user from user table, index key
  }], false);
  console.log("BOOP",db.getData("/users/userId/pets[-1]"))
}

// Function getBoops(userId)
// Description: get array of objects containing pets

module.exports.getBoops = function (userId) {
  console.log("BOOPS",db.getData(`/users/userId/pets`))
  return db.getData(`/users/userId/pets`)
}

// Function unboop(petId, userId)
// Description: delete selected pet

module.exports.unboop = function (petId, userId) {
  console.log("UNBOOP",db.getData(`/users/userId/pets[${petId}]`))
  db.delete(`/users/userId/pets[${petId}]`);
}
