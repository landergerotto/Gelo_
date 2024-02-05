const path = require('path');
const fs = require('fs')
const Fomiga = require('../model/product')
// const User = require('../model/login');

class FomigaController {
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

        const { name, description, price } = req.body;

        if (!name || !description || !price)
            return res.status(400).send({ message: "os campos não podem estarem vazios " });
        if (name.length < 3)
            return res.status(400).send({ message: "o nome do produto não pode ser menor que 3 caracteres" });
        if (description.length < 15)
            return res.status(400).send({ message: "a descricao do produto não pode ser menor que 15 caracteres" });

        try {
            const fomiga = {
                name,
                description,
                price,
                bought: [],
                createdAt: Date.now(),
                updatedAt: Date.now(),
                removedAt: null,
            }
            console.log('a')
            await Fomiga.create(fomiga)

            return res.status(201).send({ message: "Produto criado com sucesso" })
        } catch (error) {
            ArticleController.createLog(error);
            return res.status(500).send({ error: "Falha ao salvar o produto", data: error.message });
        }
    };

    static async likeArticle(req, res) {

        const { artId } = req.params;
        const { userId } = req.body;

        if (!artId)
            return res.status(400).send({ message: "No article id provider" })

        if (!userId)
            return res.status(400).send({ message: "No user id provider" })

        try {
            const user = await User.findById(userId);
            const article = await Article.findById(artId);

            if (user.liked != null) {
                if (user.liked.includes(artId)) {
                    user.liked = user.liked.filter( (item) => item != artId )

                    await Article.findByIdAndUpdate({ _id: artId }, { likes: --article.likes })
                    await User.findByIdAndUpdate({ _id: userId }, { liked: user.liked })
                    return res.status(200).send();
                }
        }
            
            user.liked.push(artId)

            await Article.findByIdAndUpdate({ _id: artId }, { likes: ++article.likes })
            await User.findByIdAndUpdate({ _id: userId }, { liked: user.liked })

            return res.status(200).send();
        } catch (error) {
            ArticleController.createLog(error);
            return res.status(500).send({ error: "Falha ao curtir", data: error.message })
        }
    }

    static async getAllFomigas(req, res)
    {
        const fomigas = await Fomiga.find();
        return res.status(200).send(fomigas);
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
}

module.exports = FomigaController;
