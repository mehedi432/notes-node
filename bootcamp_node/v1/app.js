var express = require('express');
var bodyParser = require('body-parser');
var app = express()

// Express Middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
	{title: "Chittagong Camp", image: "https://cdn.pixabay.com/photo/2019/11/15/05/23/dog-4627679_960_720.png"},
	{title: "Dhaka Camp", image: "https://cdn.pixabay.com/photo/2019/11/15/05/23/dog-4627679_960_720.png"},
	{title: "Uttara Camp", image: "https://cdn.pixabay.com/photo/2019/11/15/05/23/dog-4627679_960_720.png"},
	{title: "Uttara Camp", image: "https://cdn.pixabay.com/photo/2019/11/15/05/23/dog-4627679_960_720.png"},
	{title: "Uttara Camp", image: "https://cdn.pixabay.com/photo/2019/11/15/05/23/dog-4627679_960_720.png"},
	{title: "Chittagong Camp", image: "https://cdn.pixabay.com/photo/2019/11/15/05/23/dog-4627679_960_720.png"},
	{title: "Dhaka Camp", image: "https://cdn.pixabay.com/photo/2019/11/15/05/23/dog-4627679_960_720.png"},
	{title: "Uttara Camp", image: "https://cdn.pixabay.com/photo/2019/11/15/05/23/dog-4627679_960_720.png"},
	{title: "Uttara Camp", image: "https://cdn.pixabay.com/photo/2019/11/15/05/23/dog-4627679_960_720.png"},
	{title: "Uttara Camp", image: "https://cdn.pixabay.com/photo/2019/11/15/05/23/dog-4627679_960_720.png"},
	{title: "Uttara Camp", image: "https://cdn.pixabay.com/photo/2019/11/15/05/23/dog-4627679_960_720.png"},
	{title: "Uttara Camp", image: "https://cdn.pixabay.com/photo/2019/11/15/05/23/dog-4627679_960_720.png"},
];

app.get('/', (req, res)=>{
	res.render("landing");
});

app.get('/campgrounds', (req, res) => {
	res.render("campgrounds", {campgrounds:campgrounds});
});

app.post('/campgrounds', (req, res)=>{
	// get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image}
	campgrounds.push(newCampground);
	// redirect back to campgrounds page
	res.redirect('campgrounds');
});

app.get('/campgrounds/new', (req, res) => {
	res.render('new');
});

var port = process.env.port || 3000;
app.listen(port, (err) => {
  if (err) throw err;
  console.log(err);
});
