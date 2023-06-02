const { Router } = require('express');
const router = Router();
const bcrypt = require('bcrypt');
const User = require('../Models/User');
const jwt = require("jsonwebtoken");

require("dotenv").config();

// Obtener todos los usuarios
router.get('/users', async (req, res) => {
    const users = await User.find().exec();
    res.json(users);
});

// Registrar nuevo usuario
router.post('/signup', async (req, res) => {
    const { password: passwordPlainText, ...rest } = req.body

    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(passwordPlainText, salt)

    const newUser = await User.create({ password, ...rest })

    const token = newUser.generateJWT()
    res.setHeader('access-control-expose-headers', 'x-auth-token')
    res.setHeader('x-auth-token', token).json(newUser)
  
});

// Logear a un usuario
router.post('/signin', async (req, res) => {
    const { password: passwordPlainText, username } = req.body

    console.log(process.env.jwt_privateKey);


    const user = await User.findOne({ username })

    const isAuth = await bcrypt.compare(passwordPlainText, user.password)

    if (isAuth) {

        const token = user.generateJWT()
        res.setHeader('access-control-expose-headers', 'x-auth-token')
        res.setHeader('x-auth-token', token)
        res.send('Te has logeado')
    } else {
        res.send("Usuario/constraseña incorrecto")
    }
});

// Obtener usuario por id
router.get('/users/:id', async (req, res) => {
    try {
    const users = req.params.id
    const usersId = await User.findById(users).exec();
        res.json(usersId);        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Usuario no encontrado' });
    }
});

// Añadir producto a la wishlist
router.post('/wishList', async (req, res) => {
    try {
        const { userId, productId } = req.body

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $push: { wishList: productId } }

        )
        updatedUser.save()
        res.json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Producto no encontrado.' });
    }
});


module.exports = router;


