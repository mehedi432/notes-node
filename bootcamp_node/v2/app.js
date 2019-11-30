var express 	= require('express'),
	app 		= express(),
	bodyParser  = require('body-parser'),
	mongoose 	= require('mongoose');


// Connecting with database
mongoose.connect("mongodb://localhost/boot_camp");


// Express Middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


// Schema setup
var campGroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
});
var Campground = mongoose.model("Campground", campGroundSchema);

// Campground.create({
// 	name: "Uttara Camp",
// 	image: "https://cdn.pixabay.com/photo/2019/11/15/05/23/dog-4627679_960_720.png",
// 	description: "This is uttara branch of our campgrounds, This will help you to make yourself as a developer after having a course or bootcamp about 6 oor 8 months."
// }, (err, campground) => {
// 	 if (err) throw err;
// 	 console.log("Newly created campground: " + campground);
// }); 


app.get('/', (req, res)=>{
	res.render("landing");
});

// index - GET
app.get('/campgrounds', (req, res) => {
	// Get all campgrounds from db
	Campground.find({}, (err, allCampgrounds) => {
		if (err) throw err;
		// Send it to template
		res.render("index", {campgrounds:allCampgrounds});
	});
});

// new - GET
app.get('/campgrounds/new', (req, res) => {
	res.render('new');
});

// create - POST
app.post('/campgrounds', (req, res)=>{
	// get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var description = req.body.description;
	var newCampground = {name: name, image: image, description: description};

	// Create new campground and save to database
	Campground.create(newCampground, (err, newlyCreated) => {
		if(err) {
			console.log(err);
		} else {
		// redirect back to campgrounds page
			res.redirect('campgrounds');
		}
	});
});

// show - GET
app.get('/campgrounds/:id', (req, res) => {
	// Find the campground with provided id
	Campground.findById(req.params.id, (err, foundCampground) => {
		if (err) {
			console.log(err);
		} else {
			// render show template with that campground
			res.render('show', {campground:foundCampground});	 
		}	 		 
	});
});
 

var port = process.env.port || 3000;
app.listen(port, (err) => {
  if (err) throw err;
  console.log(err);
});
