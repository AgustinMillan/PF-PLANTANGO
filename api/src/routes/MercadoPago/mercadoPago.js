const express = require("express");
const router = express.Router();
// const PaymentController = require("./paymentController.js");
// const PaymentService = require("./paymentService.js");

// const PaymentInstance = new PaymentController(new PaymentService());


// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN,
});

router.post("/payment", async (req, res) => {
  let productos = await req.body
  // let array = [];
  // aux = aux.forEach((i) => {
  //   let obj = {
  //     title: i.nameProd,
  //     description: "Dummy description",
  //     picture_url: "http://www.myapp.com/myimage.jpg",
  //     category_id: i.codProd,
  //     quantity: i.cantidad,
  //     unit_price: i.precio,
  //   };
  //   array.push(obj)
  // });

  let preference = {
    items: [],

    back_urls: {
      failure: "/failure",
      pending: "/pending",
      success: "/success"
    }
  };

  productos.forEach((i) => {
    preference.items.push({
      title: i.nameProd,
      description: "Dummy description",
      picture_url: "http://www.myapp.com/myimage.jpg",
      // category_id:(i.codProd),
      quantity: i.cantidad,
      unit_price: parseInt(i.precio),
    })
  });

  // console.log(preference.items);

  const response = await mercadopago.preferences.create(preference);
  const preferenceId = response.body.id;
  res.send({preferenceId})

});





// router.post("/", function (req, res, next) {
//   return res.json({
//     "/payment": "generates a payment link",
//     "/subscription": "generates a subscription link"
//   });
// });

// router.post("/payment", async function (req, res, next) {
//   let aux = await req.body
//   let array = [];
//   aux = aux.forEach((i) => {
//     let obj = {
//       title: i.nameProd,
//       description: "Dummy description",
//       picture_url: "http://www.myapp.com/myimage.jpg",
//       category_id: i.codProd,
//       quantity: i.cantidad,
//       unit_price: i.precio,
//     };
//     array.push(obj)
//   })
//   // console.log(array);
//   // PaymentService
//   PaymentInstance.getPaymentLink(array, res);  //Llega el array "carrito" a req.body
// });




module.exports = router;