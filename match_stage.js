// $match all celestial bodies, not equal to Star
db.solarSystem.aggregate([{
  "$match": { "type": { "$ne": "Star" } }
}]).pretty()

// same query using find command
db.solarSystem.find({ "type": { "$ne": "Star" } }).pretty();

// count the number of matching documents
db.solarSystem.count();

// using $count
db.solarSystem.aggregate([{
  "$match": { "type": { "$ne": "Star"} }
}, {
  "$count": "planets"
}]);

// matching on value, and removing ``_id`` from projected document
db.solarSystem.find({"name": "Earth"}, {"_id": 0});

db.movies.aggregate([{
  "$match": { "imdb.rating": { "$gte": 7 } , { $or: [ { "genres" : { "$ne": "Crime" } }, { "genres" : { "$ne": "Horror" } } ] },
  { $or: [ { "rated" : { "$eq": "PG" } }, { "rated " : { "$eq": "G" } } ] },
  { "languages": { $in: ["English", "Japanese"] } }
}]).pretty()
