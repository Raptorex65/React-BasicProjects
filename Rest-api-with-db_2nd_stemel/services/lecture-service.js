const lectureRepository = require('../persistency/lectures-repository');
//Burasi bir order alani gibi dusunulebilir
//Buradaki is istekleri repository'ye gonderilerek db uzerinden islem yapiliyor
//Repodan islenerek hazir edilen veri router'a(routes) geri gonderiliyor
const createLecture = async(pLecture) => {
    return await lectureRepository.create(pLecture);
}

const deleteLecture = async(lectureId) => {
    return await lectureRepository.remove(lectureId);
}

const getAllLectures = async() => {
    return await lectureRepository.getAll();
}

const getLectureById = async(pId) => {
    return await lectureRepository.findById(pId);
}

const updateLecture = async(pId, pUpdatedLecture) => {
    let movie = await lectureRepository.updateById(pId, pUpdatedLecture);
    return movie;
}

module.exports = {createLecture, deleteLecture, getAllLectures, 
    getLectureById, updateLecture};


