import express from 'express';
import productController from '../controllers/ProductController.js'
const productRoutes = express.Router();

productRoutes.post('/registerProduct', async (req,res) =>{
    console.log(req.body);
    let data = await productController.registerProduct(req.body);
    res.json(data);
});

productRoutes.get('/get-products', async (req,res) =>{
    const data = await productController.getProducts();
    res.json({
        data: data,
        totalResults: data.length,
        status: "ok"
    })
});

productRoutes.get('/filter', (req,res) =>{
    res.json({status: "filter"})
});

productRoutes.post('/updateProducts', async (req,res) =>{
    console.log(req.body);
    let data = await productController.updateProducts(req.body);
    res.json(data);
});

productRoutes.delete('/deleteProducts', async (req,res) =>{
    console.log(req.body);
    let data = await productController.deleteProducts(req.body);
    res.json(data);
});

export default productRoutes;
