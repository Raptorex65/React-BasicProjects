const db = require('../util/sequelize-db.js')

const getAll = async() => {
  return await db.teachers.findAll();
};

const findById = async(pId) => {
  return await db.teachers.findByPk(pId);
}

const create = async(pTeacher) => {
  return await db.teachers.create(pTeacher);
}

const remove = async(pId)=> {
  return await db.teachers.destroy({
    where: { id: pId }
  })
}

const updateById = async(pId, pUpdatedTeacher)=> {
  return await db.teachers.update(pUpdatedTeacher, {
    where: { id: pId }
  });
}
module.exports = {getAll, findById, create, remove, updateById};
