var express = require('express');
const axios = require('axios');



const createGuest = async (req) => {

    let input = {
        "firstName": req.body.firstName,
        "surname": req.body.surname,
        "arrival": req.body.arrival,
        "personCount": req.body.personCount
    }

    let response = await axios.post('http://localhost:3000/', input);
    
    return response;

}

module.exports = {createGuest};