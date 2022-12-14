const server = require("./src/app.js");
const { llenarDB } = require("./src/controller/plantas.js");
const {
  llenarCategory,
  llenarUser,
  llenarBilling,
  llenarBillingDetail,
} = require("./src/controller/Billing.js");
const { llenarDBPlants } = require("./src/controller/plantas.js");
const { llenarDBProd } = require("./src/controller/productos.js");
const { conn } = require("./src/db.js");

// Syncing all the models at once.
// Por motivos de desarrollo, podrian dejar la syncronizacion forzada?
// Gracias -La Administracion (osea yo).
conn
  .sync({ force: false })
  .then(llenarDB)
  .then(llenarCategory)
  .then(llenarDBProd)
  .then(llenarUser)
  .then(llenarBilling)
  .then(llenarBillingDetail)
  .then(llenarDBPlants)

  .then(() => {
    server.listen(process.env.PORT, () => {
      console.log('Server listening at port 3001'); // eslint-disable-line no-console
    });
  });
