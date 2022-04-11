import express from 'express'
import productContainer from '../productContainer.js'
import Files from './file.js'
import fs from 'fs' 


const router = express.Router()
const products = new Files("../files/productos.txt")

let productos = products.guardar({})

const admin = (req,res,next)=>{
    if(req.headers.authorization){
        next()
    }else{
        res.status(400).send({
            message: -1, 
            description: `ruta ${req.url} method: ${req.method} No autorizado`})
    }
}

const productService = new productContainer();

router.get('/', (req,res)=>{
    productService.getAllProducts()
res.send(productService)
})

router.get('/:id', (req,res)=>{
    productService.getAllProducts().length+1;
    res.send(productService)
    }) 


    let time = Date.now()
router.post('/',admin, (req,res)=>{
let {id, time, name, description, code, pic, price, stock} = req.body
let productos = productService.saveProduct({id, time, name, description, code, pic, price, stock});
res.status(200).send({
    status:"success",
    message:"Product added"
})

})

router.put('/:id',admin,  (req,res)=>{

})

router.delete('/:id', admin, (req,res)=>{

})

export default router