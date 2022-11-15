const { Router } = require("express");
const { Category, Product } = require("../db");

const Prod = Router();

Prod.post('/createcategory', async (req, res) => {
    try {
    await Category.findOrCreate({
        where:{descripCategory :"Semillas"}
    });
    await Category.findOrCreate({
        where:{descripCategory :"Macetas"}
    });
    await Category.findOrCreate({
        where:{descripCategory :"Tierras y Fertilizantes"}
    });
    await Category.findOrCreate({
        where:{descripCategory :"Accesorios"}
    });
    res.send("Categorias Cargadas en base de Datos"); 

    }
    catch (error) {
        res.json( {error: error})
    }
});

Prod.post('/createproduct', async (req, res) => {
    await Product.create(req.body)
    .then( (data) => {
        res.json( {datos:data})
    })
    .catch( (error) => {
        res.json( {error: error})
    })
})

Prod.get('/getproduct', async (req, res) => {
    await Product.findAll({
        include: {
            model : Category, 
            attribute : ["descripCategory"],
        },
    })
    .then( (data) => {
        res.json( {datos:data})
    })
    .catch( (error) => {
        res.json( {error: error})
    })
})

module.exports = Prod;