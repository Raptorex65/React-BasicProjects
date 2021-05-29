const studentRepository = require('../persistency/student-repository');
//Burasi bir order alani gibi dusunulebilir
//Buradaki is istekleri repository'ye gonderilerek db uzerinden islem yapiliyor
//Repodan islenerek hazir edilen veri router'a(routes) geri gonderiliyor
const createStudent = async(newStudent) => {
    return await studentRepository.create(newStudent);
}

const deleteStudent = async(studentId) => {
    return await studentRepository.remove(studentId);
}

const getAllStudents = async() => {
    return await studentRepository.getAll();
}

const getStudentById = async(studentId) => {
    return await studentRepository.findById(studentId);
}

const updateStudent = async(pId, pUpdatedStudent) => {
    let movie = await studentRepository.updateById(pId, pUpdatedStudent);
    return movie;
}

module.exports = {createStudent, deleteStudent, getAllStudents, 
    getStudentById, updateStudent};


