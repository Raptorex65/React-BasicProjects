const rentRepository = require('../persistency/rent-repository');


const createMovieRent = async(movieId) => {
    return await rentRepository.create(movieId);
}

module.exports = createMovieRent;