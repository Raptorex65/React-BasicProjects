const enrollRepository = require('../persistency/enrollment-repository');
//Burasi bir order alani gibi dusunulebilir
//Buradaki is istekleri repository'ye gonderilerek db uzerinden islem yapiliyor
//Repodan islenerek hazir edilen veri router'a(routes) geri gonderiliyor
const createEnroll = async(newEnrollment) => {
    return await enrollRepository.create(newEnrollment);
}

const deleteEnroll = async(enrollmentId) => {
    return await enrollRepository.remove(enrollmentId);
}

const getAllEnrolls = async() => {
    return await enrollRepository.getAll();
}

const getEnrollById = async(enrollmentId) => {
    return await enrollRepository.findById(enrollmentId);
}

const updateEnroll = async(enrollmentId, enrollmentToBeUpdated) => {
    let movie = await enrollRepository.updateById(enrollmentId, enrollmentToBeUpdated);
    return movie;
}

module.exports = {createEnroll, deleteEnroll, getAllEnrolls, 
    getEnrollById, updateEnroll};


