const db = require('../util/sequelize-db.js');
//Service'den gelen iş istekleri burada db üzerinde islenir ve geri gonderilir.
//Islemler findAll, findByPk vd sequelize komutlarindan istifade edilir..
//Bu komutlar ve daha fazlasi sequelize'in sitesinde var
const getAll = async() => {
    return await db.enrolls.findAll();
};

const findById = async(enrollmentId) => {
    return await db.enrolls.findByPk(enrollmentId);
}

const create = async(pEnroll) => {
    return await db.enrolls.create(pEnroll);
}
  
const remove = async(enrollmentId)=> {
    return await db.enrolls.destroy({
      where: { id: enrollmentId }
    })
}

const updateById = async(enrollmentId, enrollmentToBeUpdated)=> {
    return await db.enrolls.update(enrollmentToBeUpdated, {
      where: { id: enrollmentId }
    });
}
module.exports = {getAll, findById, create, remove, updateById};





