// module.exports = mercadopago;

const express = require("express");
const router = express.Router();
// const axios = require("axios");

const PaymentController = require("./paymentController.js");
const PaymentService = require("./paymentService.js");

const PaymentInstance = new PaymentController(new PaymentService());


router.post("/", function (req, res, next) {
  return res.json({
    "/payment": "generates a payment link",
    "/subscription": "generates a subscription link"
  });
});

router.post("/payment", async function (req, res, next) {
  let aux = await req.body
  let array = [];
  aux = aux.forEach((i) => {
    let obj = {
      title: i.nameProd,
      description: "Dummy description",
      picture_url: "http://www.myapp.com/myimage.jpg",
      category_id: i.codProd,
      quantity: i.cantidad,
      unit_price: i.precio,
    };
    array.push(obj)
  })
  // console.log(array);
  // PaymentService
  PaymentInstance.getPaymentLink(array, res);  //Llega el array "carrito" a req.body
});




module.exports = router;