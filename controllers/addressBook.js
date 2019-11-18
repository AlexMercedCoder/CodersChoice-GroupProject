const express = require("express");
const router = express.Router();

const AddressBook = require("../models/addressBook.js");

router.get('/', (request, response) => {
    AddressBook.find({}, (error, foundAdressBook) => {
        response.json(foundAdressBook);
    });
});