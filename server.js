const express = require("express");
const mongoose = require("mongoose");
const app = express();
const contactController = require("./controllers/addressBook.js");

app.use(express.json());
app.use(express.static('public'));
app.use('/contact', contactController);
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

mongoose.connection.once('open', () => {
	console.log('connected to mongoose ......')
});

app.listen(3000, () => {
	console.log('listening on port 3000')
});