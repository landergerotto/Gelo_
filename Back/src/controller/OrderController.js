
class OrderController {
    static async create (req, res) {
        console.log("Cheguei aq hehe");

        return res.status(201).send({ message: "Pedido criado com sucesso" });
    }
}

module.exports = OrderController;