const { User } = require("../model/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const CryptoJS = require("crypto-js");

class AuthControler {
  static async register(req, res) {
    // const { name, email, password, adm, confirmPassword } = req.body;
    
    // console.log(req.body)

    var bytes = CryptoJS.AES.decrypt(req.body.jsonCrypt, process.env.SECRET);
    const decryptd = bytes.toString(CryptoJS.enc.Utf8);
    const json = JSON.parse(decryptd);

    const { name, email, password, adm, confirmPassword } = json;

    if (!name) return res.status(400).json({ message: "O nome é obrigatório" });
    if (!email)
      return res.status(400).json({ message: "O e-mail é obrigatório" });
    if (!password)
      return res.status(400).json({ message: "A senha é obrigatória" });

    if (password != confirmPassword)
      return res.status(400).json({ message: "As senhas não conferem" });

    const userExist = await User.findOne({ email: email });
    if (userExist)
      return res.status(422).json({ message: "insira outro e-mail" });

    const passwordCrypt = CryptoJS.AES.encrypt(
      password,
      process.env.SECRET
    ).toString();

    const user = new User({
      name: name,
      login: email,
      password: passwordCrypt,
      email,
      adm,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      removedAt: null,
    });
    
    try {
      // console.log(user); 
      await User.create(user);
      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error) {
      console.log(user); 
      return res
        .status(500)
        .send({ message: "Something failed", data: error.message });
    }
  }

  static async login(req, res) {
    // const { email, password } = req.body;

    var bytes = CryptoJS.AES.decrypt(req.body.jsonCrypt, process.env.SECRET);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    const json = JSON.parse(decrypted);

    const { email, password } = json;

    if (!email)
      return res.status(422).json({ message: "O e-mail é obrigatório" });

    if (!password)
      return res.status(422).json({ message: "A senha é obrigatória" });

    const user = await User.findOne({ email: email });

    if (!user)
      return res.status(422).json({ message: "Usuário e/ou senha inválido" });

    // console.log(json);
    bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET);
    const decrypted2 = bytes.toString(CryptoJS.enc.Utf8);

    if (decrypted2 != password)
      return res.status(422).send({ message: "Senha inválida" });

    try {
      const secret = process.env.SECRET;
      const token = jwt.sign(
        {
          id: user._id,
          adm: user.adm
        },
        secret,
        {
          expiresIn: "2 days",
        }
      );
      return res.status(200).send({ token: token });
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Something failed", data: error.message });
    }
  }
}

module.exports = AuthControler;
