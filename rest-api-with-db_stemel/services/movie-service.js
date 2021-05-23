const movieRepository = require('../persistency/movie-repository');
//Burasi bir order alani gibi dusunulebilir
//Buradaki is istekleri repository'ye gonderilerek db uzerinden islem yapiliyor
//Repodan islenerek hazir edilen veri router'a(routes) geri gonderiliyor
const createMovie = async(pMovie) => {
    return await movieRepository.create(pMovie);
}

const deleteMovie = async(pId) => {
    return await movieRepository.remove(pId);
}

const getAllMovies = async() => {
    return await movieRepository.getAll();
}

const getMovieById = async(pId) => {
    return await movieRepository.findById(pId);
}

const updateMovie = async(pId, pUpdatedMovie) => {
    let movie = await movieRepository.updateById(pId, pUpdatedMovie);
    return movie;
}

module.exports = {createMovie, deleteMovie, getAllMovies, 
    getMovieById, updateMovie};


