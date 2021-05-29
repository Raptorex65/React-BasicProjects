const db = require('../util/sequelize-db.js');
//Service'den gelen iş istekleri burada db üzerinde islenir ve geri gonderilir.
//Islemler findAll, findByPk vd sequelize komutlarindan istifade edilir..
//Bu komutlar ve daha fazlasi sequelize'in sitesinde var
const getAll = async() => {
    return await db.lectures.findAll();
};

const findById = async(pId) => {
    return await db.lectures.findByPk(pId);
}

const create = async(pLecture) => {
    return await db.lectures.create(pLecture);
}
  
const remove = async(pId)=> {
    return await db.lectures.destroy({
      where: { id: pId }
    })
}

const updateById = async(pId, pUpdatedLecture)=> {
    return await db.lectures.update(pUpdatedLecture, {
      where: { id: pId }
    });
}
module.exports = {getAll, findById, create, remove, updateById};





