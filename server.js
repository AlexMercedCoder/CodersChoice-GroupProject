const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bookMarksController = require("./controllers/addressBook.js");

app.use(express.json());
app.use(express.static('public'));
app.use('/addressBook', addressBookController);

mongoose.connect('mongodb://localhost:27017/bookmarks', { useNewUrlParser: true });

mongoose.connection.once('open', () => {
	console.log('connected to mongoose ......')
});

app.listen(3000, () => {
	console.log('listening on port 3000')
});