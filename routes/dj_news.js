const express = require('express');
const router = express.Router();
const request = require('request');

let searchTerm = "coronavirus"
const urlSearch = `http://newsapi.org/v2/everything?q=${searchTerm}&apiKey=8e80ed210b4843ccbf87ee02fc78c5e3`

router.get("/searchTerm", (req,res) => {
    request(urlSearch,(error,res,body) => {
        let searchResults = JSON.parse(body);
        console.log(searchResults);
    });
});

module.exports = router;