const db = require('../util/sequelize-db.js');


const createRent = async(pMovie) => {
    return await db.rents.create(pMovie);
  }

module.exports = createRent;