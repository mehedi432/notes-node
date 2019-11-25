var mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/person_app", { useNewUrlParser: true });


// Defining a pattern for data
var personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    relationship: String,
});
var Person = mongoose.model("Person", personSchema);


// Adding a new person in database --------(1)
// var person = new Person({
//     name: "Abdullah Al Mehdi",
//     age: 19,
//     relationship: "Brother",
// });
// person.save((err, person)=>{
//     if (err) console.log(err);
//     console.log("We just save a person");
//     console.log(person);
// });

// Adding a new person in database --------(2)
// Person.create({
//     name: "Masum Abdullah",
//     age: 18,
//     relationship: "Brother",
// }, (err, person) => {
//     if (err) throw err;
//     console.log(person);
// });


// Retrieve all person from the db and show it on the console
Person.find({}, (err, people) => {
    if (err) throw err;
    console.log(people);
});
