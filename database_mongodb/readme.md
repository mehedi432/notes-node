# Databases
-----------
## Intro to Databases
	* What is a database?
		* A collection of data/information.
		* Has an interface
		* `SELECT * FROM user;`
	* SQL(relationals) vs NoSQL(non-relationals)


## Example of SQL Database
* User table
id |  name |  age  |  city  
--------------------------
1  |  babo |  25   |  NYC
2  |  mamo |  23   |  BD
3  |  kamo |  22   |  IN


* Comments table
id  |  comments
---------------
1   |  "Good job"
2   |  "Why this is?"
3   |  "What is the reason?"


* USER/COMMENTS JOIN TABLE
userId  |  commentId
-------------------
1		|  3
2       |  4


### In mongodb or noSQL database we can we can define database as -
{
	name: "Kashem",
	age: 24,
	city: Dhaka,
	comments: [
		{text: "Come and buy a mobile"},
		{text: "Dhaka is a ugly city"},
	],
	favColor: "teal",
}


# Intro to mongodb - 101
	* What is mongodb?
	* Why are we using it?
	* Install it on linux


# Our First Mongo Commands
	* mongod -> mongo demon for serving the database,
	* mongo -> mongo shell for surfing the internet,
	* help -> for getting supported,
	* show dbs -> viewing all the dbs,
	* use -> for using collection, 
	* insert -> inserting data in the collection.
	* find  -> for finding data,
	* update -> for updating data,
	* remove -> for removing data from collection,

## Examples for CRUD
insert in mongodb
	> use dogs
	> db.dogs.insert({name: "husky", breed: "Mutt", age: 9})
	> db.dogs.insert({name: "Lulu", breed: "Mutt", age: 10})
	> db.dogs.find({}) # finding all of the element in collection
	> db.dogs.find({name: "husky"}) # finding a specefic element
	> db.dogs.find({breed: "Mutt"})
	> db.dogs.update({ name: "Lulu"}, {breed: "labradoddle"}) # it will only update breed and the name has gone forever which is not appropriate so we need to re modify the mongo command for updating a specefic item
	> db.dogs.update({name: "husky"}, {$set: {name: "Tater", isCute: true}})
	> db.dogs.remove({}) # will delete or remove everything
	> db.dogs.remove({ name: "husky" }) # Removing huskys all attributes

# Mongoose
* What is mongoose?
	* Mongoose is a object relational mapper which helps us to reduce the complexity of storing and retieving data in a nice and easy way.
* Why are we using mongoose?
* Interacting with Mongo Database using Mongoose
	* For working with mongodb we need to import it
	`js
		var mongoose = require('mongoose');
		mongoose.connect("mongodb://localhost/{name_database}");

		// Creating a model schema for our collection
		var personSchema = new mongoose.Schema({
			name: String,
			age: Number,
			isCute: Boolean,
			relation: String
		});
		// Compile it to use as an collection of people (Plural form of Person)
		var Person = mongoose.model("Person", personSchema);

		// Creating a new people in people collection ------- (1)
		var mehedi = new Person({
			name: "Mehedi",
			age; 25,
			isCute: false,
			relation: "owner",
		});
		// Saving data to database
		mehedi.save((err, person) => {
			if (err) throw err;
			console.log(`Created new entry to our people collection`);
			console.log(person);
		});

		// Creating a new people in people collection in short form and we need not to use save method------- (2)
		Person.create({
			name: "Masum Abdullah", 
			age: 32,
			relation: "Brother",
		}, (err, person) => {
			if (err) throw err;
			console.log(person);
		});

		Person.find({}, (err, person) => {
			if (err) throw err;
			console.log(person);
		});
	` 













