const teacherRepository = require('../persistency/teacher-repository');
//Burasi bir order alani gibi dusunulebilir
//Buradaki is istekleri repository'ye gonderilerek db uzerinden islem yapiliyor
//Repodan islenerek hazir edilen veri router'a(routes) geri gonderiliyor
const createTeacher = async(newTeacher) => {
    return await teacherRepository.create(newTeacher);
}

const deleteTeacher = async(teacherId) => {
    return await teacherRepository.remove(teacherId);
}

const getAllTeachers = async() => {
    return await teacherRepository.getAll();
}

const getTeacherById = async(teacherId) => {
    return await teacherRepository.findById(teacherId);
}

const updateTeacher = async(teacherId, teacherToBeUpdated) => {
    let updatedTeacher = await teacherRepository.updateById(teacherId, teacherToBeUpdated);
    return updatedTeacher;
}

module.exports = {createTeacher, deleteTeacher, getAllTeachers, 
    getTeacherById, updateTeacher};


