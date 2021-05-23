const db = require('../util/sequelize-db.js')

const getAll = async() => {
  return await db.movies.findAll();
};

const findById = async(pId) => {
  return await db.movies.findByPk(pId);
}

const create = async(pMovie) => {
  return await db.movies.create(pMovie);
}

const remove = async(pId)=> {
  return await db.movies.destroy({
    where: { id: pId }
  })
}

const updateById = async(pId, pUpdatedMovie)=> {
  return await db.movies.update(pUpdatedMovie, {
    where: { id: pId }
  });
}
module.exports = {getAll, findById, create, remove, updateById};
