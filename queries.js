const fs = require('fs');

const databaseSelect = (tableName, columnName, whereKey, whereValue) => {
  return fs.readFile('database.json', 'utf8', function(error, json) {
    if (error) {
      return console.log("ERROR databaseSelect:",error);
    }

    let parsedJson = JSON.parse(json)
    if (!parsedJson[tableName]){
      console.log("ERROR databaseSelect:",tableName,"can't be found in database");
    } else if (!parsedJson[tableName][columnName]){
      console.log("ERROR databaseSelect:",columnName,"can't be found in",tableName,"table");
    } else if (!parsedJson[tableName][columnName][whereKey]){
      console.log("ERROR databaseSelect:",whereKey,"can't be found in",columnName,"column of",tableName,"table");
    } else {
      return JSON.parse(json)[tableName][columnName][whereKey]
    }
  })
}

const databaseUpdate = (tableName, columnName, whereKey, whereValue) => {
  console.log("databaseUpdate");
}

const databaseDelete = (tableName, columnName, whereKey, whereValue) => {
  console.log("databaseDelete");
}

const databaseInsert = (tableName, rowValues) => {
  console.log("databaseInsert");
}

exports.databaseSelect = databaseSelect;
exports.databaseUpdate = databaseUpdate;
exports.databaseDelete = databaseDelete;
exports.databaseInsert = databaseInsert;
