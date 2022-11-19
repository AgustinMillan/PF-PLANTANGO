class PaymentController {
  constructor(subscriptionService) {
    this.subscriptionService = subscriptionService;
  }

  async getPaymentLink(req, res) {
    try {
      // let array = [];
      // req.forEach((i) => {
      //   let obj = {
      //     title: i.nameProd,
      //     description: "Dummy description",
      //     picture_url: "http://www.myapp.com/myimage.jpg",
      //     category_id: i.codProd,
      //     quantity: i.cantidad,
      //     unit_price: i.precio,
      //   };
      //   array.push(obj)
      // })
      // console.log("AAAAAAAAAAAAAAAAA" + req);

      const payment = await this.subscriptionService.createPayment();

      return res.json(payment);
    } catch (error) {
      console.log(error);

      return res
        .status(500)
        .json({ error: true, msg: "Failed to create payment" });
    }
  }
}

module.exports = PaymentController;