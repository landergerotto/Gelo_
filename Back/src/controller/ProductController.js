const path = require('path');
const fs = require('fs')
const Product = require('../model/product');
const { error } = require('console');
// const User = require('../model/login');

class ProductController {
    static createLog(error) {
        const timestamp = Date.now();
        const archivePath = path.resolve(__dirname, '../logs', `logs-${timestamp}.txt`);
        const errorString = JSON.stringify(error.message)
        fs.writeFile(archivePath, errorString, function (err, result) {
            if (err) console.log(err)
        })
    }
    static async create(req, res) {

        console.log("lesgoooo fomigaa")
        // return res.status(201).send({ message: "FOMIGAAAAAA"});

        const { name, description, price, type } = req.body;

        console.log(req.body)

        if (!name || !description || !price || !type)
            return res.status(400).send({ message: "os campos não podem estarem vazios " });
        if (name.length < 3)
            return res.status(400).send({ message: "o nome do produto não pode ser menor que 3 caracteres" });
        if (description.length < 15)
            return res.status(400).send({ message: "a descricao do produto não pode ser menor que 15 caracteres" });

        try {
            const product = {
                name,
                description,
                price,
                bought: [],
                color: [],
                type,
                createdAt: Date.now(),
                updatedAt: Date.now(),
                removedAt: null,
            }
            console.log('a')
            await Product.create(product)

            return res.status(201).send({ message: "Produto criado com sucesso" })
        } catch (error) {
            ArticleController.createLog(error);
            return res.status(500).send({ error: "Falha ao salvar o produto", data: error.message });
        }
    };

    static async delete(req, res) {
        const { id } = req.params;
        // console.log(req.params)

        try {
            await Product.findByIdAndDelete(id)
            return res.status(201).send({ message: "Produto deletado com sucesso" })
        } catch (error) {
            return res.status(500).send({ error: "Falha ao deletar o produto", data: error.message });
            
        }
    }

    static async getAllProducts(req, res)
    {
        const products = await Product.find();
        return res.status(200).send(products);
    }

    static async getArticle(_id) {
        try {
            const article = await Article.findById(_id)

            if (!article)
                return res.status(404).send({ message: 'Artigo não encontrado' })
            
            return article
        } catch (error) {
            throw error;
        }
    }

    static async getProduct(_id)
    {
        try {
            const products = await Product.findById(_id);
            return res.status(200).send(products);
        } catch {
            throw error;
        }

    }
}

module.exports = ProductController;
