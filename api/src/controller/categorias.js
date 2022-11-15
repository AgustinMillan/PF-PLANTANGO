const { Category } = require('../db.js')
const dbCategory = require('../dbCategory.js')


const llenarDBCategory = async () => {
  const tabla = await Category.findAll();
  if (!tabla.length) {
    const db = dbCategory.map((categoria) => {
      return {
        codCategory: categoria.CODIGO,
        decripCategory: categoria.DESCRIPCION,
      };
    });
    await Category.bulkCreate(db);
  }
}

module.exports = {
  llenarDBCategory
}