const { Router } = require('express');
const router = Router();
const Product = require('../Models/Product');
const isAuth = require ('../midldwares/isAuth');
const isAdmin = require ('../midldwares/isAdmin');


// Obtener los productos
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find().exec();
    res.json(products);
  } catch (err) {
    res.json(err);
    console.log(err);
    req.status(500).json(err);({ message: 'Productos no encontrados' });
  }
  });

  // Crear un producto nuevo
  router.post('/products/new', isAuth, isAdmin, async (req, res) => {
    try {
    const createProducts = req.body
    const newProduct = await Product.create(createProducts)
    res.json(newProduct)
    } catch (err) {
      res.json(err);
      console.log(err);
      req.status(500).json(err);({ message: 'Productos no posteado' });
    }
  
  
  });

  // Eliminar un producto
  router.delete('/products/:id',isAuth, isAdmin, async (req, res) => {
    try {
    const productId = req.params.id
    const deletedProduct = await Product.findByIdAndDelete(productId)
  
    res.json(deletedProduct)
    } catch (err) {
      res.json(err);
      console.log(err);
      req.status(500).json(err);({ message: 'Productos no eliminado' });
    }
  });

  // Actualizar un producto
  router.put('/products/:id', isAuth, isAdmin, async (req, res) => {
    try {
    const productId = req.params.id
    const updatedDetails = req.body
  
    const updatedProduct = await Product.findByIdAndUpdate(productId, updatedDetails, {
      new: true,
    })  
    res.json(updatedProduct)
    } catch (err) {
      res.json(err);
      console.log(err);
      req.status(500).json(err);({ message: 'Productos no actualizado' });
    }
  });

  // Obtener productos por categoria
router.get('/products/:categoria', async (req, res) => {
  try {
  const categoria = req.params.categoria
  const valuecategoria = await Product.find({ "categoria": categoria });
  res.json(valuecategoria);
  } catch (err) {
    res.json(err);
    console.log(err);
    req.status(500).json(err);({ message: 'Productos no encontrados' });
  }
});

// Obtener producto por id
router.get('/products/search/:id',  async (req, res) => {
  try {
  const productId = req.params.id
  console.log(productId);
  const product = await Product.findById({ _id: productId });
  res.json(product);
  } catch (err) {
    res.json(err);
    console.log(err);
    req.status(500).json(err);({ message: 'Producto no encontrado' });
  }
  
});

module.exports = router;
