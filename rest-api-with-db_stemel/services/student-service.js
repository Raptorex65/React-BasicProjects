const studentRepository = require('../persistency/student-repository');
//Burasi bir order alani gibi dusunulebilir
//Buradaki is istekleri repository'ye gonderilerek db uzerinden islem yapiliyor
//Repodan islenerek hazir edilen veri router'a(routes) geri gonderiliyor
const createStudent = async(pStudent) => {
    return await studentRepository.create(pStudent);
}

const deleteStudent = async(pId) => {
    return await studentRepository.remove(pId);
}

const getAllStudents = async() => {
    return await studentRepository.getAll();
}

const getStudentById = async(pId) => {
    return await studentRepository.findById(pId);
}

const updateStudent = async(pId, pUpdatedStudent) => {
    let movie = await studentRepository.updateById(pId, pUpdatedStudent);
    return movie;
}

module.exports = {createStudent, deleteStudent, getAllStudents, 
    getStudentById, updateStudent};


