const axios = require("axios");
// const { carritoStorage } = require("../../../../client/src/redux/actions");

class PaymentService {
  async createPayment(items) {
    const url = "https://api.mercadopago.com/checkout/preferences";

    const body = {
      payer_email: "test_user_46945293@testuser.com",
      items,
      // items: [
      //   {
      //     title: "Dummy Title",
      //     // description: "Dummy description",
      //     // picture_url: "http://www.myapp.com/myimage.jpg",
      //     category_id: "category123",
      //     quantity: 1,
      //     unit_price: 10
      //   }
      // ],
      back_urls: {
        failure: "/failure",
        pending: "/pending",
        success: "/success"
      }
    };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });

    return payment.data;
  }
}

module.exports = PaymentService;