const express = require('express');
const router = express.Router();

const service = require('../services/rent-service')

router.post('/:id/rent', function(req, res, next) {
    let movieId = req.params.id;
    service.createMovieRent(movieId, req.body);
    res.status(200).send({});
});


module.exports = router;