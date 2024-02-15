const { Order } = require("../model/order");
const Product = require("../model/product");
const { User } = require("../model/user");
const AuthControler = require("./AuthController");
const ProductController = require("./ProductController");

class OrderController {
  static createLog(error) {
    const timestamp = Date.now();
    const archivePath = path.resolve(
      __dirname,
      "../logs",
      `logs-${timestamp}.txt`
    );
    const errorString = JSON.stringify(error.message);
    fs.writeFile(archivePath, errorString, function (err, result) {
      if (err) console.log(err);
    });
  }

  static async create(req, res) {
    console.log("Cheguei aq hehe");

    const { number, product, userId } = req.body;

    if (number < 1)
      return res.status(400).send({ message: "No order Provider" });

    try {
      const user = await User.findById(userId);
      if (!user) return res.status(404).send({ message: "user not found" });
      product.forEach(async prod => {
          var foundProd = await Product.findById(prod.Id);
          if (!foundProd)
            return res.status(404).send({ message: "a product was not found" });
      });

      const order = {
        number,
        userId,
        product: product,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        removedAt: null,
      };
      await Order.create(order);
      return res.status(201).send({ message: "Order create with succes" });
    } catch (error) {
      return res
        .status(500)
        .send({ message: "failed in save order", data: error.message });
    }

    return res.status(201).send({ message: "Pedido criado com sucesso" });
  }

  
}

module.exports = OrderController;
