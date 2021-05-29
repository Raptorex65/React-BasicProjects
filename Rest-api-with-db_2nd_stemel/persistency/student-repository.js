const db = require('../util/sequelize-db.js');
//Service'den gelen iş istekleri burada db üzerinde islenir ve geri gonderilir.
//Islemler findAll, findByPk vd sequelize komutlarindan istifade edilir..
//Bu komutlar ve daha fazlasi sequelize'in sitesinde var
const getAll = async() => {
    return await db.students.findAll();
};

const findById = async(pId) => {
    return await db.students.findByPk(pId);
}

const create = async(pStudent) => {
    return await db.students.create(pStudent);
}
  
const remove = async(pId)=> {
    return await db.students.destroy({
      where: { id: pId }
    })
}

const updateById = async(pId, pUpdatedStudent)=> {
    return await db.students.update(pUpdatedStudent, {
      where: { id: pId }
    });
}
module.exports = {getAll, findById, create, remove, updateById};





